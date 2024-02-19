<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\CommonController;
use App\Http\Request\Request;
use App\Service\DatasetService;
use Illuminate\Http\JsonResponse;

class DatasetController extends CommonController
{
    public function __construct(private DatasetService $datasetService)
    {
    }

    public function show(Request $request): JsonResponse
    {
        $request->validate([
            'dataset_name' => 'required|string|min:1|max:100',
        ]);
        $datasetName = $request->input('dataset_name', '');
        $data = $this->datasetService->getByName($datasetName);
        return $this->success((object)$data);
    }

    public function datasets(Request $request): JsonResponse
    {
        $data = $this->datasetService->datasets();
        return $this->success((object)$data);
    }
}
