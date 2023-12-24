'use strict';

/**
 * signup-single service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::signup-single.signup-single');
