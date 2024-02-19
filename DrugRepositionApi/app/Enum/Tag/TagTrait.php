<?php

namespace App\Enum\Tag;

use App\Enum\Cms\Document\ChannelTagEnum;
use App\Enum\Common\YesNoEnum;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Fluent;

trait TagTrait
{

    public static function getKVFromTag(int $tag): Fluent
    {
        $tagMap = new Fluent();
        foreach (static::cases() as $case) {
            $tagMap->offsetSet($case->name, 0 < ($tag & $case->value) ? YesNoEnum::yes->value : YesNoEnum::no->value);
        }
        return $tagMap;
    }

    public static function getTagFromKV(Arrayable|array $kv): int
    {
        $tag = 0;
        foreach ($kv as $k => $v) {
            if ((1 === (int)$v)) {
                $tag = $tag | ChannelTagEnum::from($k)->value;
            }
        }
        return $tag;
    }

}
