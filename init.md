
*  npm i -g typescript 全局安装 以便 tsc 命令 *
* tsc --init 创建tsconfig 配置文件 *
* tsc ./src/index.ts *
#  main 入口详解 参考  [githup](https://github.com/SunshowerC/blog/issues/8)

* npm i webpack webpack-cli webpack-dev-server -D  搭建服务 *

* webpack version < 5  *
# webpack-dev-server --mode=development --config ./build/webpack.config.js

* webpack version 5  *
# webpack serve --mode development --env development --config ./build/webpack.config.js


* TS 数据类型 *
Boolean, Number, String, Array, Function, Object, Symbol, undefined, null, BigInt

void  void 0; eg: return undefined
any   anyscript
never  从不返回值，死循环，异常抛出

元组
`let tuple: [number, string] = [0, '1']`
元组越界能添加不能访问

枚举 & 常量枚举
枚举 实现原理 反向映射
[Ts官网 playground](https://www.typescriptlang.org/play)
枚举成员不可修改
枚举成员计算类型成员必须在后面
常量枚举成员编译计算，计算枚举成员编辑保留，运行时计算
```
  const enum Month {
    Jan,
    Feb,
    Mar,
    Apr = Month.Mar + 1,
    // May = () => 5
  }
```
计算成员后的常量成员需要初始值
常量枚举编译阶段移除，

------

 * 高级类型 *

* 接口 interface *
 交互数据有多余参数
 解决方案：
 1： 不直接传入对象字面量，先赋值给一个变量
 2： 类型断言 ，推荐react项目使用 as
`eg:  render({} as RS) 非 render(<RS>{})`

 3:  字符串索引签名
```
 interface A {
   id: number;
   [x: string]: any;
   a?: number
 };
```
# a?: number  可选属性

###### !important  class 类
默认公有成员 public
私有成员    private
# 私有成员不能被实例化，也不能被继承
受保护成员  protected
# 受保护成员不能被实例化，可以被继承
只读属性    readonlay
# 只读属性必须初始化
静态成员    static
# 静态成员只能通过类名调用，不能通过子类调用, 可以被继承

## 抽象类和多态
abstract  抽象类定义
抽象类只能被继承，不能实例化

```
abstract class Anim {
  eat() {
    console.log('eat1')
  }
  abstract sleep(): void
}
```

抽象类抽离事物共性，实现代码复用
多态： 在父类中定义方法，在多子类中有不同的实现，在程序运行时依据不同的对象执行不同的操作，实现运行时的绑定。

* 类与接口 *
类实现接口必须实现接口声明的所有属性。
接口只能约束类的公有成员。
接口不能约束类的构造函数。
继承多个接口 eg: interface Boy extends Man, Child {}
接口抽离类的成员时，不仅抽离公共成员，也包括私有成员和受保护成员
implements

* 泛型  !important *
不预先确定的数据类型，具体类型在使用的时候才确定。

泛型类
泛型类不能约束类的静态成员
优点：
1：轻松支持多种类型，增强扩展性。
2：不必函数重载，不必联合类型声明，增强可读性。
3：灵活控制类型之间的约束。
