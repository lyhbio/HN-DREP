<?php

namespace App\Http\Dto\V1;

use App\Http\Dto\V1\Base\PaginatorDto;

class DrugDiseaseSearchDto extends PaginatorDto
{
    protected $attributes = [
        'current_page' => 1,
        'per_page' => 10,
        'group_field' => 'method_name',
        //'drugbank_id' => '',
        //'disease_id' => '',
        //'method_name' => '',
        //'dataset_name' => '',
        //'drug_name' => '',
        //'disease_name' => '',
    ];

    /**
     * @return string
     */
    public function getDrugbankId(): string
    {
        return (string)$this->offsetGet('drugbank_id');
    }

    /**
     * @param string $drugbankId
     * @return void
     */
    public function setDrugbankId($drugbankId): void
    {
        $this->offsetSet('drugbank_id', (string)$drugbankId);
    }

    /**
     * @return string
     */
    public function getDrugName(): string
    {
        return (string)$this->offsetGet('drug_name');
    }

    /**
     * @param string $drugName
     * @return void
     */
    public function setDrugName($drugName): void
    {
        $this->offsetSet('drug_name', (string)$drugName);
    }

    /**
     * @return string
     */
    public function getDiseaseId(): string
    {
        return (string)$this->offsetGet('disease_id');
    }

    /**
     * @param string $diseaseId
     * @return void
     */
    public function setDiseaseId($diseaseId): void
    {
        $this->offsetSet('disease_id', (string)$diseaseId);
    }

    /**
     * @return string
     */
    public function getDiseaseName(): string
    {
        return (string)$this->offsetGet('disease_name');
    }

    /**
     * @param string $diseaseName
     * @return void
     */
    public function setDiseaseName($diseaseName): void
    {
        $this->offsetSet('disease_name', (string)$diseaseName);
    }

    /**
     * @return string
     */
    public function getMethodName(): string
    {
        return (string)$this->offsetGet('method_name');
    }

    /**
     * @param string $methodName
     * @return void
     */
    public function setMethodName($methodName): void
    {
        $this->offsetSet('method_name', (string)$methodName);
    }

    /**
     * @return string
     */
    public function getDatasetName(): string
    {
        return (string)$this->offsetGet('dataset_name');
    }

    /**
     * @param string $datasetName
     * @return void
     */
    public function setDatasetName($datasetName): void
    {
        $this->offsetSet('dataset_name', (string)$datasetName);
    }

    /**
     * @return string
     */
    public function getGroupField(): string
    {
        return (string)$this->offsetGet('group_field');
    }

    /**
     * @param string $groupField
     */
    public function setGroupField(string $groupField): void
    {
        $this->offsetSet('group_field', (string)$groupField);
    }

}
