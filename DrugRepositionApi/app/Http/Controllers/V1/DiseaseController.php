<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\CommonController;
use App\Http\Request\Request;
use App\Service\DiseaseService;
use Illuminate\Http\JsonResponse;

class DiseaseController extends CommonController
{

    public function __construct(private DiseaseService $diseaseService)
    {
    }

    public function suggest(Request $request): JsonResponse
    {
        $keywords = $request->input('keywords', '');
        return $this->success(
            $this->diseaseService->suggest($keywords)
        );
    }

    public function detail(Request $request)
    {
        $diseaseId = $request->input('disease_id', '');
        return $this->success(
            $this->diseaseService->detail($diseaseId)
        );
    }

    public function diseases(Request $request)
    {
        $diseaseNames = $request->input('disease_names', []);
        return $this->success(
            $this->diseaseService->diseases($diseaseNames)
        );
    }
}
