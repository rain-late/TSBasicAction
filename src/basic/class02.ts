// // 抽象类和多态
// abstract class Anim {
//   eat() {
//     console.log('eat1')
//   }
//   abstract sleep(): void
// }
// class Dog extends Anim {
//   constructor(public name: string) {
//     super()
//     this.name = name
//   }
//   run() {}
//   sleep() {
//     console.log('dog sleep')
//   }
// }
// let dog = new Dog('wang')
// // dog.eat()
// // dog.sleep()

// class Cat extends Anim {
//   sleep() {
//     console.log('cat sleep')
//   }
// }
// let cat  = new Cat();
// let animals: Anim[] = [dog, cat]
// animals.forEach(fn => {
//   fn.sleep()
// })

// class WorkFlow {
//   step1() {
//     return this
//   }
//   step2() {
//     return this
//   }
// }
// new WorkFlow().step1().step2()
