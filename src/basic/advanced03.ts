// // 交叉类型
// interface Dog1 {
//   run(): void
// }
// interface Cat1 {
//   jump(): void
// }
// const p: Dog1 & Cat1 = {
//   run() {},
//   jump() {}
// }

// // 联合类型
// let aaa: number | string

// class Dog2 implements Dog1 {
//   run() {}
//   eat() {}
// }
// class Cat2 implements Cat1 {
//   run() {}
//   jump() {}
// }
// enum Master {
//   Body,
//   Girl
// }
// function getPet(master: Master) {
//   let pet = master === Master.Body ? new Dog2() : new Cat2()
//   // pet.eat()
//   return pet
// }

// // 类型保护区块
// interface Square {
//   kind: 'square'
//   size: number
// }
// interface Rectangle {
//   kind: 'rectangle'
//   width: number
//   height: number
// }
// interface Circle {
//   kind: 'circle';
//   r: number
// }
// type Shape = Square | Rectangle | Circle
// function area(s: Shape) {
//   switch (s.kind) {
//     case 'square':
//       return s.size * s.size
//     case 'rectangle':
//       return s.width * s.height
//     case 'circle':
//       return Math.PI * s.r ** 2
//     default:
//       return ((e: never) => {
//         throw new Error(e)
//       })(s)
//   }
// }

// console.log(area({ kind: 'circle', r: 1 }))

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// function getVal<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
//   return keys.map(key => obj[key])
// }

// console.log(getVal(obj, ['a', 'c']))
// // console.log(getVal(obj, ['e', 'c']))

// interface Obj {
//   a: number;
//   b: number;
// }
// let key: keyof Obj;

// 映射类型
interface Obj {
  a: string;
  b: number;
}
type ReadonlyObj = Readonly<Obj>