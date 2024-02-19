<?php

namespace App\Repositories;

use App\Http\Dto\V1\DrugDiseaseSearchDto;

/**
 * Interface DrugDiseaseRepository.
 *
 * @package namespace App\Repositories;
 */
interface DrugDiseaseRepository extends BaseRepositoryInterface
{
    public function paginateSearch(DrugDiseaseSearchDto $drugDiseaseSearchDto): DrugDiseaseRepository;
}
