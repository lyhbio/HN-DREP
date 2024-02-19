<?php

namespace App\Providers;

use App\Logic\Order\Cancel\OrderCancelService;
use App\Logic\Order\Edit\State\OrderStateService;
use App\Logic\Order\Impl\Cancel\OrderCancelServiceImpl;
use App\Logic\Order\Impl\Edit\State\OrderStateServiceImpl;
use App\Logic\Pay\Refund\Impl\RefundApplyServiceImpl;
use App\Logic\Pay\Refund\RefundApplyService;
use Illuminate\Support\ServiceProvider;

class BusinessServiceProvider extends ServiceProvider
{

    public function boot()
    {
    }
}
