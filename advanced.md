
* 类型推断机制 & 兼容性  *
X 兼容 Y ： X(目标类型) = Y(源类型)
-----

*  接口兼容性 *

接口之间兼容：成员少的兼容成员多的
函数之间兼容：参数多的兼容参数少的

* 类型保护机制 *
详情 advanced02.ts

keyof T  公共属性的联合类型
```
let obj = {
  a: 1,
  b: 2,
  c: 3
}
function getVal<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getVal(obj, ['a', 'c']))
// console.log(getVal(obj, ['e', 'c']))
```

# 内置映射类型  Readonly 等等
```
interface Obj {
  a: string;
  b: number;
}
type ReadonlyObj = Readonly<Obj>
```

# 条件类型