<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Routing\Controller as BaseController;

class CommonController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function success($data = null, LengthAwarePaginator $paginator = null, int $status = 200, string $message = '成功'): JsonResponse
    {
        return success(...func_get_args());
    }

    protected function fail(\Throwable $e, $data = null): JsonResponse
    {
        return fail($e, $data);
    }

}
