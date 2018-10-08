/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'uiComponent',
    'Magento_Shipping/js/model/config'

], function (Component, config) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'MageTun_Checkout/checkout/shipping/extrat-component'
        },
        config: config()
    });
});
