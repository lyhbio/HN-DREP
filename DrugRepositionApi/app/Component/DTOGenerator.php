<?php

namespace App\Component;

class DTOGenerator
{
    /**
     * 生成 DTO 类
     *
     * @param array $fields 参数和类型的数组，如 ['id' => 'int', 'name' => 'string']
     * @param string $className 生成的 DTO 类名
     * @param string $baseClass 基类，默认为 '\Illuminate\Support\Fluent'
     * @return string 生成的 DTO 类的代码
     */
    public static function generate(array $fields, string $className, string $baseClass = '\Illuminate\Support\Fluent'): string
    {
        $code = "use $baseClass;\n\n";
        $code .= "class $className extends $baseClass\n";
        $code .= "{\n";

        foreach ($fields as $field => $type) {
            $fieldName = self::formatFieldName($field);
            $methodName = self::formatMethodName($field);

            $code .= self::generateSetter($fieldName, $methodName, $type);
            $code .= self::generateGetter($fieldName, $methodName, $type);
        }

        $code .= "}\n";

        return $code;
    }

    /**
     * 格式化属性名
     *
     * @param string $fieldName 属性名
     * @return string 格式化后的属性名
     */
    private static function formatFieldName(string $fieldName): string
    {
        return lcfirst($fieldName);
    }

    /**
     * 格式化方法名
     *
     * @param string $fieldName 属性名
     * @return string 格式化后的方法名
     */
    private static function formatMethodName(string $fieldName): string
    {
        return ucfirst($fieldName);
    }

    /**
     * 生成属性的 setter 方法
     *
     * @param string $fieldName 属性名
     * @param string $methodName 方法名
     * @param string $type 属性类型
     * @return string 生成的 setter 方法的代码
     */
    private static function generateSetter(string $fieldName, string $methodName, string $type): string
    {
        return "    public function set$methodName($$fieldName)\n    {\n        \$this->attributes['$fieldName'] = ($type) $$fieldName;\n    }\n\n";
    }

    /**
     * 生成属性的 getter 方法
     *
     * @param string $fieldName 属性名
     * @param string $methodName 方法名
     * @param string $type 属性类型
     * @return string 生成的 getter 方法的代码
     */
    private static function generateGetter(string $fieldName, string $methodName, string $type): string
    {
        return "    public function get$methodName(): $type\n    {\n        return \$this->attributes['$fieldName'];\n    }\n\n";
    }
}

/*
使用示例：
$fields = [
    'id' => 'int',
    'config_id' => 'int',
    'is_b2b' => 'int',
    'scene' => 'string',
    'fee_mode' => 'string',
    'fee_value' => 'string',
    'min_fee' => 'string',
    'createtime' => 'string',
    'updatetime' => 'string',
];

$className = 'TransactionFeeDTO';
$code = DTOGenerator::generate($fields, $className);

echo $code;
*/
