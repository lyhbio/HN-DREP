<?php

namespace App\Enum\Common;

enum EnvEnum: string
{
    case local = 'local';//本地环境
    case dev = 'dev';//测试环境
    case product = 'product';//生产环境
}
