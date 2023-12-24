'use strict';

/**
 * schedules-single service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::schedules-single.schedules-single');
