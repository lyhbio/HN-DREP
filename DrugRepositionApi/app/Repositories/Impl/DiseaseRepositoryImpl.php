<?php

namespace App\Repositories\Impl;

use App\Entities\DiseaseEntity;
use App\Repositories\BaseRepositoryImpl;
use App\Repositories\DiseaseRepository;
use Illuminate\Database\Eloquent\Collection;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Class DiseaseRepositoryEloquent.
 *
 * @package namespace App\Repositories\Impl;
 */
class DiseaseRepositoryImpl extends BaseRepositoryImpl implements DiseaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return DiseaseEntity::class;
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
            $query->where('disease_id', 'LIKE', sprintf('%%%s%%', $keywords))
                ->orWhere('do_id', 'LIKE', sprintf('%%%s%%', $keywords))
                ->orWhere('disease_name', 'LIKE', sprintf('%%%s%%', $keywords))
                ->orWhere('synonyms', 'LIKE', sprintf('%%%s%%', $keywords));
        }
        return $query->select($columns)->inRandomOrder()->limit(100)->get();
    }

    public function getByDiseaseId(string $diseaseId): ?DiseaseEntity
    {
        return $this->getModel()->newQuery()->where('disease_id', $diseaseId)->firstOrFail();
    }

    public function getByDiseaseName(string $diseaseName): Collection
    {
        $query = $this->getModel()->newQuery();
        if (!$diseaseName) {
            $query->whereRaw('1 != 1');
        } else {
            $query->where('disease_name', $diseaseName);
        }
        return $query->get();
    }

    public function getByDiseaseNames(array $diseaseNames): Collection
    {
        $query = $this->getModel()->newQuery();
        if (!$diseaseNames) {
            $query->whereRaw('1 != 1');
        } else {
            $query->whereIn('disease_name', $diseaseNames);
        }
        return $query->get();
    }
}
