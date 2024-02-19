<?php

namespace App\Http\Middleware;

use App\Component\LogHelper;
use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\HeaderBag;

class AccessLog
{
    /**
     * @param Request $request
     * @param Closure $next
     * @return JsonResponse|mixed|\Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next)
    {
        $requestId = (string)Str::uuid();
        $traceId = $request->header('Trace-Id', $requestId);
        $start = microtime(true);

        Log::channel('trace_log')->withContext([
            'Request-Id' => $requestId,
            'Trace-Id' => $traceId,
        ]);
        Log::channel('sql_log')->withContext([
            'Request-Id' => $requestId,
            'Trace-Id' => $traceId,
        ]);
        Log::channel('app_log')->withContext([
            'Request-Id' => $requestId,
            'Trace-Id' => $traceId,
        ]);
        Log::withContext([
            'Request-Id' => $requestId,
            'Trace-Id' => $traceId,
        ]);

        $resp = $next($request)->header('Request-Id', $requestId)->header('Trace-Id', $traceId);

        resolve(LogHelper::class)->trace([
            'request' => [
                'method' => $request->getMethod(),
                'url' => $request->fullUrl(),
                'ip' => $request->getClientIp(),
                'headers' => $request->headers instanceof HeaderBag
                    ? [
                        'cookie' => $request->headers->get('cookie', ''),
                        'authorization' => $request->headers->get('authorization', ''),
                    ]
                    : $request->headers,
                'param' => $request->all(),
            ],
            'response' => [
                'body' => $resp instanceof JsonResponse
                    ? json_decode($resp->getContent(), true)
                    : $resp,
                'status_code' => $resp instanceof \Symfony\Component\HttpFoundation\Response
                    ? $resp->getStatusCode()
                    : null,
            ],
            'time_used' => sprintf('%.6f', microtime(true) - $start),
        ]);
        return $resp;
    }
}
