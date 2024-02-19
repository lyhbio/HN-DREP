<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Collection;

/**
 * Interface DrugRepository.
 *
 * @package namespace App\Repositories;
 */
interface DrugRepository extends BaseRepositoryInterface
{
    public function matchByKeywords(string $keywords, array $columns = ['*']): Collection;
}
