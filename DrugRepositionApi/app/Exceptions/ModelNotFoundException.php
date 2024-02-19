<?php

namespace App\Exceptions;

class ModelNotFoundException extends \Illuminate\Database\Eloquent\ModelNotFoundException
{
    public function setModel($model, $ids = [])
    {
        parent::setModel($model, $ids);
        $this->message = str_replace(
            'Entity', '', str_replace('No query results for model', \__('business.model_not_exist'), $this->getMessage())
        );
        return $this;
    }
}
