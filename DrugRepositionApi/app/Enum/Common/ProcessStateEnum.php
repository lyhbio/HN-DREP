<?php

namespace App\Enum\Common;

use App\Enum\EnumTrait;

enum ProcessStateEnum: string
{
    use EnumTrait;

    case pending = 'pending';
    case processing = 'processing';
    case succeeded = 'succeeded';
    case failed = 'failed';

    public static function labels(): array
    {
        return [
            self::pending->value => '待处理',
            self::processing->value => '处理中',
            self::succeeded->value => '处理成功',
            self::failed->value => '处理失败',
        ];
    }
}
