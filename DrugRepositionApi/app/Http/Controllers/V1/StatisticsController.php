<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\CommonController;
use App\Service\StatisticService;
use Illuminate\Http\JsonResponse;

class StatisticsController extends CommonController
{
    public function __construct(private StatisticService $statisticService)
    {
    }

    public function statistics(): JsonResponse
    {
        return $this->success(
            $this->statisticService->statistics()
        );
    }
}
