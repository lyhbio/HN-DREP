<?php

namespace App\Listeners\Common;

use App\Component\LogHelper;
use Illuminate\Database\Events\QueryExecuted;

class QueryListener
{

    public function handle(QueryExecuted $event)
    {
        $sql = $event->sql;
        $bindings = $event->bindings;
        $time = $event->time; // 毫秒
        $bindings = array_map(function ($binding) {
            if (is_string($binding)) {
                return (string)$binding;
            }
            if ($binding instanceof \DateTime) {
                return $binding->format("'Y-m-d H:i:s'");
            }
            return $binding;
        }, $bindings);
        $sql = str_replace('?', '%s', $sql);
        $sql = sprintf($sql, ...$bindings);
        resolve(LogHelper::class)->sql(['sql' => $sql, 'time' => $time . 'ms']);
    }

}
