<?php

namespace App\Repositories\Impl;

use App\Criteria\DrugDiseaseCriteria;
use App\Entities\DrugDiseaseEntity;
use App\Http\Dto\V1\DrugDiseaseSearchDto;
use App\Repositories\BaseRepositoryImpl;
use App\Repositories\DrugDiseaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class DrugDiseaseRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DrugDiseaseRepositoryImpl extends BaseRepositoryImpl implements DrugDiseaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DrugDiseaseEntity::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
        $this->pushCriteria(app(DrugDiseaseCriteria::class));
    }

    public function paginateSearch(DrugDiseaseSearchDto $drugDiseaseSearchDto): DrugDiseaseRepository
    {
        $criteria = resolve(DrugDiseaseCriteria::class, ['attributes' => $drugDiseaseSearchDto->toArray()]);
        return $this->resetCriteria()
            ->pushCriteria($criteria);
    }
}
