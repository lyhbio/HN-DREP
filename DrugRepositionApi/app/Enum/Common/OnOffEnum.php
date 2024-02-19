<?php

namespace App\Enum\Common;

use App\Enum\EnumTrait;
use JetBrains\PhpStorm\ArrayShape;

enum OnOffEnum: string
{
    use EnumTrait;

    case on = 'on';
    case off = 'off';

    #[ArrayShape(['on' => "string", 'off' => "string"])]
    public static function labels(): array
    {
        return [
            self::on->value => '开启',
            self::off->value => '关闭',
        ];
    }
}
