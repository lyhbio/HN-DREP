<?php

namespace App\Http\Dto\V1\Base;

use Illuminate\Support\Fluent;

class PaginatorDto extends Fluent
{

    protected $attributes = [
        'current_page' => 1,
        'per_page' => 1,
    ];

    /**
     * @return int
     */
    public function getCurrentPage(): int
    {
        return (int)max(1, $this->offsetGet('current_page'));
    }

    /**
     * @param int $currentPage
     * @return void
     */
    public function setCurrentPage($currentPage): void
    {
        $this->offsetSet('current_page', (int)$currentPage);
    }

    /**
     * @return int
     */
    public function getPerPage(): int
    {
        return (int)max(1, $this->offsetGet('per_page'));
    }

    /**
     * @param int $perPage
     * @return void
     */
    public function setPerPage($perPage): void
    {
        $this->offsetSet('per_page', (int)$perPage);
    }

}
