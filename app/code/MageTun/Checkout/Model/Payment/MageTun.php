<?php

namespace MageTun\Checkout\Model\Payment;

class MageTun extends \Magento\Payment\Model\Method\AbstractMethod
{

    protected $_code = "magetun";
    protected $_isOffline = true;

    public function isAvailable(
        \Magento\Quote\Api\Data\CartInterface $quote = null
    ) {
        return parent::isAvailable($quote);
    }
}