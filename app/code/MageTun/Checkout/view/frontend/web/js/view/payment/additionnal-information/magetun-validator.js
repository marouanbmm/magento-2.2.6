define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/additional-validators',
        'MageTun_Checkout/js/model/magetun-validator'
    ],
    function (Component, additionalValidators, mageTunValidator) {
        'use strict';
        additionalValidators.registerValidator(mageTunValidator);
        return Component.extend({});
    }
);