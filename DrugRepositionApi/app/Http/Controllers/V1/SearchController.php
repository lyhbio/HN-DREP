<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\CommonController;
use App\Http\Dto\V1\DrugDiseaseSearchDto;
use App\Http\Request\Request;
use App\Service\DrugDiseaseService;
use Illuminate\Http\JsonResponse;

class SearchController extends CommonController
{
    public function __construct(private DrugDiseaseService $drugDiseaseService)
    {
    }

    public function search(Request $request): JsonResponse
    {
        $drugSearchDto = resolve(DrugDiseaseSearchDto::class, ['attributes' => $request->all()]);
        return $this->success(
            $this->drugDiseaseService->search($drugSearchDto)
        );
    }

}
