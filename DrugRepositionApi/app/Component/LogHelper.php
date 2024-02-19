<?php

namespace App\Component;

use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Psr\Log\LoggerInterface;
use Throwable;
use function data_get;

class LogHelper
{

    public function trace(array $context)
    {
        $this->contextWrap($context);
        Log::channel('trace_log')->info('trace_log', $context);
    }

    public function sql(array $context)
    {
        Log::channel('sql_log')->info('sql_log', $context);
    }

    public function app(): LoggerInterface
    {
        $context = [];
        $this->contextWrap($context);
        return Log::channel('app_log');
    }

    public function error(Throwable $e, mixed $params = null)
    {
        $this->app()->error(
            data_get(Arr::first($e->getTrace()), 'function', '')
            , [
            'msg' => $e->getmessage(),
            'trace' => str_replace(['\\\\', '\\'], '/', $e->getTraceAsString()),
            'params' => $params,
        ]);
    }

    private function contextWrap(array &$context)
    {
        $context['time'] = sprintf('%.6f', microtime(true));
        $context['backtrace'] = array_map(function (array $trace) {
            return Arr::only($trace, ['line', 'file']);
        }, array_slice(debug_backtrace(DEBUG_BACKTRACE_IGNORE_ARGS), 1));
    }
}
