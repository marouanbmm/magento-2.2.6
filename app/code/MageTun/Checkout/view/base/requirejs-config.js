var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'MageTun_Checkout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'MageTun_Checkout/js/view/shipping-payment-mixin': true
            }
        }
    }
}