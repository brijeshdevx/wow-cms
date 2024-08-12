'use strict';

/**
 * cart-upsell service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cart-upsell.cart-upsell');
