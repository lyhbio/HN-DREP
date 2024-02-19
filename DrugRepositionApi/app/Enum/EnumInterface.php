<?php

namespace App\Enum;

interface EnumInterface
{
    public function label(): string;

    public static function labels(): array;
}
