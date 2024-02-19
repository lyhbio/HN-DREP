<?php

namespace App\Enum\Common\ThirdParty;

use App\Enum\EnumTrait;

enum SocialPlatformEnum: string
{
    use EnumTrait;

    case wechat = 'wechat';

    public static function labels(): array
    {
        return [
            self::wechat->value => '微信',
        ];
    }
}
