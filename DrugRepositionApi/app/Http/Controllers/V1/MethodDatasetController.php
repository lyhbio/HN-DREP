<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\CommonController;
use App\Service\MethodDatasetService;
use Illuminate\Http\JsonResponse;

class MethodDatasetController extends CommonController
{
    public function __construct(private MethodDatasetService $methodDatasetService)
    {
    }

    public function all(): JsonResponse
    {
        return $this->success($this->methodDatasetService->getMethodsDatasets());
    }
}
