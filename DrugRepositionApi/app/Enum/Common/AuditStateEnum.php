<?php

namespace App\Enum\Common;

use App\Enum\EnumTrait;

/**
 * @description 文档状态
 */
enum AuditStateEnum: string
{
    use EnumTrait;

    case approving = 'approving';//审批中
    case approved = 'approved';//审核通过
    case rejected = 'rejected';//审核拒绝

    public static function labels(): array
    {
        return [
            self::approving->value => '审核中',
            self::approved->value => '审核通过',
            self::rejected->value => '审核拒绝',
        ];
    }
}
