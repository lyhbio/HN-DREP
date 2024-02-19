<?php

namespace App\Repositories\Impl;

use App\Entities\DiseaseOwnEntity;
use App\Repositories\DiseaseOwnRepository;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class DiseaseOwnRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DiseaseOwnRepositoryImpl extends \App\Repositories\BaseRepositoryImpl implements DiseaseOwnRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DiseaseOwnEntity::class;
    }


    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function getByDiseaseId(string $diseaseId): ?DiseaseOwnEntity
    {
        return $this->getModel()->newQuery()->where('disease_id', $diseaseId)->firstOrFail();
    }
}
