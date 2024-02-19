<?php

namespace App\Repositories;

use App\Entities\DiseaseOwnEntity;

/**
 * Interface DiseaseOwnRepository.
 *
 * @package namespace App\Repositories;
 */
interface DiseaseOwnRepository extends BaseRepositoryInterface
{
    public function getByDiseaseId(string $diseaseId): ?DiseaseOwnEntity;
}
