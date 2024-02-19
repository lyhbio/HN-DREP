<?php

namespace App\Http\Request;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Fluent;

class Request extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function expectsJson(): bool
    {
        return true;
    }

    public function wantsJson(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'current_page' => ['nullable', 'integer', 'min:0'],
            'per_page' => ['nullable', 'integer', 'min:0'],
        ];
    }

    protected function dataType(): string
    {
        return '';
    }

    public function getData()
    {
        $class = $this->dataType();
        if ($class) {
            $obj = new $class($this->toArray());
            if (method_exists($obj, 'setSellerId') && Auth::id()) {
                call_user_func_array([$obj, 'setSellerId'], [Auth::id()]);
            }
            if (method_exists($obj, 'setCreatorId') && Auth::id()) {
                call_user_func_array([$obj, 'setCreatorId'], [Auth::id()]);
            }
            if (method_exists($obj, 'setOperatorId') && Auth::id()) {
                call_user_func_array([$obj, 'setOperatorId'], [Auth::id()]);
            }
            if (method_exists($obj, 'setUserId') && Auth::id() && !method_exists($obj, 'setOperatorId')) {
                call_user_func_array([$obj, 'setUserId'], [Auth::id()]);
            }
            return $obj;
        }
        return new Fluent($this->toArray());
    }

    public function prepareForValidation()
    {
        $this->merge($this->route()->parameters());
    }
}
