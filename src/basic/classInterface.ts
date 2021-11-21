// interface Human {
//   name: string
//   eat(): void
// }

// class Asian implements Human {
//   constructor(public name: string) {
//     this.name = name
//   }
//   eat() {}
//   sleep() {}
// }

// interface Man extends Human {
//   run(): void
// }

// interface Child {
//   cry(): void
// }
// interface Boy extends Man, Child {}

// let boy: Boy = {
//   name: '1',
//   run() {},
//   eat() {},
//   cry() {}
// }

// class Auto {
//   state = 1
//   // private s = 0
// }
// interface AutoFace extends Auto {

// }
// class C implements AutoFace {
//   state = 1
// }

// class Bus extends Auto implements AutoFace {

// }