<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\CommonController;
use App\Http\Request\Request;
use App\Service\MethodService;
use Illuminate\Http\JsonResponse;

class MethodController extends CommonController
{
    public function __construct(private MethodService $methodService)
    {
    }

    public function show(Request $request): JsonResponse
    {
        $request->validate([
            'method_name' => 'required|string|min:1|max:100',
        ]);
        $methodName = (string)$request->input('method_name', '');
        $datasetName = (string)$request->input('dataset_name', '');
        $data = $this->methodService->getByMethodAndDataset($methodName, $datasetName);
        return $this->success($data);
    }

    public function methods(): JsonResponse
    {
        return $this->success($this->methodService->methods());
    }
}
