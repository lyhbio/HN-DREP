<?php

namespace App\Criteria;

use Illuminate\Support\Fluent;
use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class DrugDiseaseCriteriaCriteria.
 *
 * @package namespace App\Criteria;
 */
class DrugDiseaseCriteria extends Fluent implements CriteriaInterface
{
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
     * Apply criteria in query repository
     *
     * @param string $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        if ($this->getDrugName()) {

        }
        if ($this->getDiseaseName()) {

        }
        if ($this->offsetExists('drugbank_id')) {
            $model = $model->where('drugbank_id', $this->getDrugbankId());
        }
        if ($this->offsetExists('disease_id')) {
            $model = $model->where('disease_id', $this->getDiseaseId());
        }
        if ($this->offsetExists('method_name')) {
            $model = $model->where('method_name', $this->getMethodName());
        }
        if ($this->offsetExists('dataset_name')) {
            $model = $model->where('dataset_name', $this->getDatasetName());
        }
        return $model;
    }
}
