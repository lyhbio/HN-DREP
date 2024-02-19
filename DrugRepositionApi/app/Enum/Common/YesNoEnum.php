<?php

namespace App\Enum\Common;

use App\Enum\EnumTrait;
use JetBrains\PhpStorm\ArrayShape;

enum YesNoEnum: string
{
    use EnumTrait;

    case yes = 'yes';
    case no = 'no';

    #[ArrayShape(['yes' => "string", 'no' => "string"])]
    public static function labels(): array
    {
        return [
            self::yes->value => '是',
            self::no->value => '否',
        ];
    }
}
