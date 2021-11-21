
// // 类型保护机制
// const enum Type {Strong, Week}
// class Java {
//   helloJava() {
//     console.log('hello Java')
//   };
//   java: any
// }
// class JavaScript {
//   helloJavaScript() {
//     console.log('hello JavaScript')
//   }
//   javascript: any
// }

// // 4: 类型保护函数  类型谓词 is
// function isJava(lang: Java | JavaScript): lang is Java {
//   return (lang as Java).helloJava !== undefined
// }

// // 类型断言
// function getLanguage(type: Type, x: string | number) {
//   let lang = type === Type.Strong ? new Java() : new JavaScript()
//   // if (lang.helloJava) {
//   //   lang.helloJava()
//   // } else {
//   //   lang.helloJavaScript()
//   // }
//   // 1： 类型断言 as
//   // (lang as Java).helloJava
//   // 2:  instanceof
//   // if (lang instanceof Java) {
//   //   lang.helloJava();
//   // }
//   // 3: in
//   // if ('java' in lang) {
//   //   lang.helloJava()
//   // }
//   // 4: typeof
//   // if (typeof x === 'string') {
//   //   x.length
//   // }
//   // if (isJava(lang)) {
//   //   lang.helloJava()
//   // }
//   return lang
// }