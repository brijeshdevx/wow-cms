const processEntity = async (entityId) => {
  const updatedData = await strapi.entityService.findOne(
    'api::product.product',
    entityId,
    {
      populate: ['productBenefitTags', 'promotionTag', 'offerTag'],
    }
  );

  return {
    productBenefitTags:
      {
        data: updatedData?.productBenefitTags?.map(
          ({ tag, bgColor }) => ({
            attributes: {
              tag,
              bgColor,
            },
          })
        ),
      } || [],
    promotionTag: updatedData?.promotionTag && {
      data: {
        attributes: {
          tag: updatedData.promotionTag.tag,
          bgColor: updatedData.promotionTag.bgColor,
        },
      },
    },
    offerTag: updatedData?.offerTag && {
      showOfferTag: updatedData.offerTag.showOfferTag,
      bgColor: updatedData.offerTag.bgColor,
    },
    slug: updatedData.slug,
    imageBgColor: updatedData.imageBgColor,
  };
};

const makeApiCall = async (
  url,
  method,
  headers = {},
  body = null
) => {
  const response = await fetch(url, {
    method,
    headers: { Accept: 'application/json', ...headers },
    ...(body && { body: JSON.stringify(body) }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

const getAuthToken = async () => {
  const { STRAPI_AUTH_USER_ID, STRAPI_AUTH_PASSWORD, BASE_URL } =
    process.env;

  if (!STRAPI_AUTH_USER_ID || !STRAPI_AUTH_PASSWORD || !BASE_URL) {
    throw new Error('Missing required environment variables');
  }

  const apiUrl = new URL(`${BASE_URL}/strapi/authToken`);
  apiUrl.searchParams.append('username', STRAPI_AUTH_USER_ID);
  apiUrl.searchParams.append('password', STRAPI_AUTH_PASSWORD);

  const data = await makeApiCall(apiUrl.toString(), 'GET');
  return data.accessToken;
};

const updateProduct = async (processedData) => {
  const { BASE_URL, STORE_ID } = process.env;
  const accessToken = await getAuthToken();

  const updateProductUrl = new URL(
    `${BASE_URL}/store/${STORE_ID}/strapi-sync`
  );
  return makeApiCall(
    updateProductUrl.toString(),
    'POST',
    { apiKey: accessToken },
    processedData
  );
};

const handleLifecycleEvent = async (event, eventType) => {
  try {
    const processedData = await processEntity(event.result.id);
    console.log(`Processed data after ${eventType}:`, processedData);

    const updateResponse = await updateProduct(processedData);
    console.log('Update product response:', updateResponse);
  } catch (error) {
    console.error(`Error in after${eventType}:`, error);
  }
};

module.exports = {
  afterUpdate: async (event) => handleLifecycleEvent(event, 'update'),
  afterCreate: async (event) => handleLifecycleEvent(event, 'create'),
};
