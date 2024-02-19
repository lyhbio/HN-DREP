<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\CommonController;
use App\Http\Request\Request;
use App\Service\DrugService;
use Illuminate\Http\JsonResponse;

class DrugController extends CommonController
{
    public function __construct(private DrugService $drugSearchService)
    {
    }

    public function suggest(Request $request): JsonResponse
    {
        $keywords = $request->input('keywords', '');
        return $this->success(
            $this->drugSearchService->suggest($keywords)
        );
    }

    public function detail(string $drugBankId): JsonResponse
    {
        return $this->success(
            $this->drugSearchService->detail($drugBankId)
        );
    }
}
