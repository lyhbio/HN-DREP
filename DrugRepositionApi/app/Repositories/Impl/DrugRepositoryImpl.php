<?php

namespace App\Repositories\Impl;

use App\Entities\DrugEntity;
use App\Repositories\BaseRepositoryImpl;
use App\Repositories\DrugRepository;
use Illuminate\Database\Eloquent\Collection;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class DrugRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DrugRepositoryImpl extends BaseRepositoryImpl implements DrugRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DrugEntity::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    public function matchByKeywords(string $keywords, array $columns = ['*']): Collection
    {
        $query = $this->getModel()->newQuery();
        if ($keywords) {
            $query->where('drugbank_id', 'LIKE', sprintf('%%%s%%', $keywords));
            $query->orWhere('drug_name', 'LIKE', sprintf('%%%s%%', $keywords));
        }
        return $query->select($columns)->limit(10)->get();
    }
}
