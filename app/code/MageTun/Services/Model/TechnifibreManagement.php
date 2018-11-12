<?php
namespace MageTun\Services\Model;


use Zend\Soap\Client as SoapClient;

class TechnifibreManagement implements \MageTun\Services\Api\TechnifibreManagementInterface
{

    private $soapClientFactory=null;

    public function __construct(\Magento\Framework\Webapi\Soap\ClientFactory $soapClientFactory)
    {
        $this->soapClientFactory = $soapClientFactory;
    }

    /**
     * {@inheritdoc}
     */
    public function postTechnifibre($param)
    {
      $url = 'http://magento226.prep/soap/default?wsdl&services=mageTunServicesTechnifibreManagementV1';
            $opts = array(
                'http'=>array(
                    'header' => 'Authorization: marouan2018 A123456789'
                )
            );
            $context = stream_context_create($opts);
            $client = $this->soapClientFactory->create($url,  array('soap_version'=>SOAP_1_2, 'stream_context'=>$context));
           var_dump(get_class_methods($client));
    }

}