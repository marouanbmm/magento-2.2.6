define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'magetun',
                component: 'MageTun_Checkout/js/view/payment/method-renderer/magetun-method'
            }
        );
        return Component.extend({});
    }
);