<?php

namespace App\Repositories;

use App\Entities\DiseaseEntity;
use Illuminate\Database\Eloquent\Collection;

/**
 * Interface DiseaseRepository.
 *
 * @package namespace App\Repositories;
 */
interface DiseaseRepository extends BaseRepositoryInterface
{
    public function matchByKeywords(string $keywords, array $columns = ['*']): Collection;

    public function getByDiseaseId(string $diseaseId): ?DiseaseEntity;

    /**
     * @param string $diseaseName
     * @return \Illuminate\Database\Eloquent\Collection|DiseaseEntity[]
     */
    public function getByDiseaseName(string $diseaseName): Collection;

    public function getByDiseaseNames(array $diseaseNames): Collection;
}
