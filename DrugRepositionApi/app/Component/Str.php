<?php

namespace App\Component;

class Str
{
    public static function isJson($string): bool
    {
        return is_string($string)
            && (is_object(json_decode($string)) || is_array(json_decode($string)));
    }
}
