<?php

use App\Component\LogHelper;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Arr;
use Prettus\Validator\Exceptions\ValidatorException;
use Symfony\Component\HttpKernel\Exception\HttpException;

function success($data = null, LengthAwarePaginator $paginator = null, int|string $status = 200, string $message = '成功'): JsonResponse
{
    is_array($data) && ksort($data);
    return response()->json([
        'status_code' => (string)$status,
        'message' => $message,
        'data' => $data,
        'paginator' => $paginator ? [
            'current_page' => $paginator->currentPage(),
            'last_page' => $paginator->lastPage(),
            'per_page' => $paginator->perPage(),
            'total' => $paginator->total(),
        ] : null,
    ]);
}

function fail(\Throwable $e, $data = null): JsonResponse
{
    $log = [
        'msg' => $e instanceof ValidatorException
            ? implode(' ', Arr::collapse($e->getMessageBag()->getMessages()))
            : $e->getMessage(),
        'trace' => str_replace(['\\\\', '\\'], '/', $e->getTraceAsString()),
    ];
    if ('local' === env('APP_ENV') && env('APP_DEBUG')) {
        if (!($_SERVER['HTTP_ORIGIN'] ?? '')) {
//            dump($log);
        }
    }
    resolve(LogHelper::class)->app()->error('fail', $log);
    $statusCode = '500';
    $httpCode = 500;
    $message = $e->getMessage();
    if ($e instanceof HttpException) {
        $statusCode = $httpCode = $e->getStatusCode();
    } else if ($e instanceof ModelNotFoundException) {
        $statusCode = 404;
        $message = sprintf(
            '%s'
            , preg_replace('/(\[.*\])/', '', $e->getMessage())
        );
        $message = str_replace(['Entity'], '', $message);
    } else if ($e instanceof AuthenticationException) {
        $statusCode = $httpCode = 401;
        $message = '权限不足';
    } else if ($e instanceof \Prettus\Validator\Exceptions\ValidatorException) {
        $message = sprintf(
            '参数验证失败 %s'
            , implode(' ', Arr::collapse($e->getMessageBag()->getMessages()))
        );
        $statusCode = $httpCode = 406;
    } else if ($e instanceof \Illuminate\Validation\ValidationException) {
        $statusCode = $httpCode = $e->status;
        $message = sprintf(
            '参数验证失败 %s'
            , implode(' ', Arr::collapse($e->errors()))
        );
    }
    return response()->json([
        'status_code' => (string)($statusCode ?: 500),
        'message' => $message,
        'data' => $data,
        'paginator' => null,
    ], $httpCode);
}
