<?php

namespace App\Component;

use Illuminate\Support\Str;

class Arr
{

    public static function getArrayItem($param, string $column): array
    {
        $arrayItem = \data_get($param, $column, null);
        if (!is_null($arrayItem)) {
            if (is_array($arrayItem)) {
                return $arrayItem;
            } else if (Str::contains($arrayItem, ',')) {
                return explode(',', $arrayItem ?? '');
            } else if ('' === $arrayItem) {
                return [];
            } else if (is_scalar($arrayItem)) {
                return [$arrayItem];
            }
        }
        return [];
    }
}
