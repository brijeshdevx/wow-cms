const processEntity = async (entityId) => {
  const updatedData = await strapi.entityService.findOne(
    'api::product.product',
    entityId,
    {
      populate: ['productBenefitTags', 'promotionTag', 'offerTag'],
    }
  );

  const processedBenefitTags = updatedData?.productBenefitTags?.map(
    ({ tag, bgColor }) => ({ tag, bgColor })
  );

  const processedPromotionTag = updatedData?.promotionTag
    ? {
        tag: updatedData.promotionTag.tag,
        bgColor: updatedData.promotionTag.bgColor,
      }
    : null;

  const processedOfferTag = updatedData?.offerTag
    ? {
        showOfferTag: updatedData.offerTag.showOfferTag,
        bgColor: updatedData.offerTag.bgColor,
      }
    : null;

  return {
    productBenefitTags: processedBenefitTags,
    promotionTag: processedPromotionTag,
    offerTag: processedOfferTag,
    slug: updatedData.slug,
    imageBgColor: updatedData.imageBgColor,
  };
};

module.exports = {
  async afterUpdate(event) {
    const { result } = event;
    try {
      const processedData = await processEntity(result.id);
      console.log('Processed data after update:', processedData);
    } catch (error) {
      console.error('Error in afterUpdate:', error);
    }
  },

  async afterCreate(event) {
    const { result } = event;
    try {
      const processedData = await processEntity(result.id);
      console.log('Processed data after create:', processedData);
    } catch (error) {
      console.error('Error in afterCreate:', error);
    }
  },
};
