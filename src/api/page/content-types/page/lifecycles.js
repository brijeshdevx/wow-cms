const { afterCreate } = require("../../../product/content-types/product/lifecycles");

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

const revalidatePage = async ({ slug }) => {
  const { BASE_URL, STORE_ID } = process.env;
  const accessToken = await getAuthToken();

  const revalidatePageUrl = new URL(
    `${BASE_URL}/store/${STORE_ID}/revalidate-strapi`
  );
  return makeApiCall(
    revalidatePageUrl.toString(),
    'POST',
    { apiKey: accessToken },
    {
      slug,
      storeId: STORE_ID,
    }
  );
};

const handleLifecycleEvent = async (event, eventType) => {
  try {
    const pageType = {
      HOME: '/',
      COLLECTION: '/collections/',
      PRODUCT: '/products/',
      LANDING: '',
    };
    const { result } = event || {};
    const { type, slug } = result || {};

    if (!!slug) {
      const revalidateResponse = await revalidatePage({
        slug: `${pageType[type]}${slug}`,
      });

      console.log('revalidateResponse :>> ', revalidateResponse);
    }
  } catch (error) {
    console.error(`Error in after${eventType}:`, error);
  }
};

module.exports = {
  afterUpdate: async (event) =>
    handleLifecycleEvent(event, 'afterUpdate'),
  afterCreate: async (event) =>
    handleLifecycleEvent(event, 'afterCreate'),
};
