# 打印堆栈
这里提供了两个Sample，分别是打印Android Java层的虚拟机堆栈和Native的堆栈。
## 虚拟机堆栈
直接使用Java自带的接口`Throwable.getStackTrace()`，所以只需获取到类，然后`$new`一个实例，然后直接调用`getStackTrace()`即可拿到虚拟机的堆栈。

## Native堆栈

`Thread.backtrace([context, backtracer])`
这个接口是Frida提供的，在其[官网文档](https://frida.re/docs/javascript-api/#thread)也有。
`context`就是`attach`时提供的一些上下文信息。
`backtracer`有两个选项：`Backtracer.FUZZY`、`Backtracer.ACCURATE`，不填的话默认是`Backtracer.ACCURATE`，我一般用`Backtracer.FUZZY`。