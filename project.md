
# 工程

TS > tsc(ts-loader) > js > babel > js

# babel 7 +
ts  >  js

babel 不做类型检查，类型错误可以编译成功

# 开启noEmit
ts只做类型检查
ts-check 脚本新开终端，只做类型检查

# babel 不能编译的语法
1. 命名空间
2. 类型断言写法 <React>
3. 常量枚举
4. 顶级导出 export = s

babel 项目中 安装 @babel/preset-typescript (配合tsc类型检查)