
// // function log<T>(value: T): T {
// //   return value
// // }

// // log<string[]>(['a', 'b'])
// // log<number>(1)

// // // type Log = <T>(value: T) => T;
// // // let myLog: Log = log

// // interface Log<T> {
// //   (value: T): T
// // }
// // let meLog: Log<number> = log

// // class Log<T> {
// //   run(value: T) {
// //     console.log(value)
// //     return value
// //   }
// // }
// // let log1 = new Log<number>()
// // log1.run(1)
// // let log2 = new Log()
// // log2.run({ a: 1 })

// // 类型约束
// interface Length {
//   length: number
// }
// function log<T extends Length>(value: T): T {
//   console.log(value, value.length);
//   return value
// }
// log(2)
// log('2')
// log({length: 1})