<?php

namespace App\Enum;

use JetBrains\PhpStorm\Pure;

trait EnumTrait
{
    #[Pure]
    public function label(): string
    {
        return (string)(static::labels()[$this->name] ?? '');
    }

    abstract public static function labels(): array;

    public static function values(): array
    {
        return array_column(static::cases(), 'value');
    }
/*
    public static function fromKey(string $key): static
    {
        foreach (static::cases() as $case) {
            if ($key === $case->name) {
                return $case;
            }
        }
        throw new \RuntimeException(sprintf('枚举类型%s不存在', $key));
    }

    public static function tryFromKey(string $key): ?static
    {
        foreach (static::cases() as $case) {
            if ($key === $case->name) {
                return $case;
            }
        }
        return null;
    }
*/
}
