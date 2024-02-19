<?php

namespace App\Providers;

use App\Events\Order\State\OrderCanceledEvent;
use App\Events\Pay\Pay\PaySuccessEvent;
use App\Events\Pay\Refund\RefundApplyEvent;
use App\Listeners\Common\QueryListener;
use App\Listeners\Order\Pay\OrderPaySuccessListener;
use App\Listeners\Order\State\OrderCanceledListener;
use App\Listeners\Pay\Refund\RefundApplyListener;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        QueryExecuted::class => [
            QueryListener::class,
        ],
        /******************** 用户 *******************/
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        /******************** 支付 *******************/
        PaySuccessEvent::class => [
            OrderPaySuccessListener::class,
        ],
        /******************** 订单 *******************/
        OrderCanceledEvent::class => [
            OrderCanceledListener::class,
        ],
        RefundApplyEvent::class => [
            RefundApplyListener::class,
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
