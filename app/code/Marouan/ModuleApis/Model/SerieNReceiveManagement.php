<?php
namespace Marouan\ModuleApis\Model;

class SerieNReceiveManagement implements \Marouan\ModuleApis\Api\SerieNReceiveManagementInterface
{

    /**
     * {@inheritdoc}
     */
    public function getSerieNReceive($getSerieNReceive)
    {
        return 'hello api GET return the $name: ' . $getSerieNReceive;
    }
}