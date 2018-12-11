# 《Frida操作手册》

>PS1：by : [@hluwa](https://github.com/hluwa)  [@r0ysue](https://github.com/r0ysue) <br/>
PS2：所有讨论、更新、源码以及部分付费内容尽在【hook老法师】知识星球：https://t.zsxq.com/MbIm2vR

![](tmp/xiaomiquan-logo1.png)

## changelog：

|date|log|
|:-:|:-|
|2018-12-11|完成[`03.基本案例上手/3.5 Android`](https://www.freebuf.com/articles/system/190565.html)部分，讲解了`FRIDA`的hook参数、修改结果、远程调用、动态修改等功能|
|2018-12-08|完成[`01.多平台环境安装/1.3.Android-iOS.md`](https://bbs.pediy.com/thread-248293.htm)文章中的安卓部分，安卓版本为`8.1`|
|2018-12-06|完成目录，并上传到github|
|2018-12-05|前言02：FRIDA-HOOK频道开设|
|2018-11-24|前言01：似水流年|

## 前言

### [一、似水流年](https://bbs.pediy.com/thread-247957-1.htm)
### [二、FRIDA/HOOK频道开设](00前言02.FRIDA-HOOK频道开设/FRIDA-HOOK频道开设.md)

## [第1章. 多平台环境安装](01.多平台环境安装)
### 1.1 FRIDA基本架构
### 1.2 Windows/macOS/Linux
### 1.3 [Android/iOS](https://bbs.pediy.com/thread-248293.htm)（安卓8.1）
#### 1.3.1 Android root
#### 1.3.2 Android frida-server 安装
### 1.4 源码编译

## 第2章. FRIDA工具
### 2.1 Frida CLI
### 2.2 Frida-ps
### 2.3 Frida-trace
### 2.4 Frida-discover
### 2.5 Frida-ls-devices
### 2.6 Frida-kill

## 第3章. 基本案例上手
### 3.1 Windows
### 3.2 macOS
### 3.3 Linux
### 3.4 iOS
### 3.5 [Android](https://www.freebuf.com/articles/system/190565.html)
#### 3.5.1 基本能力：hook参数、修改结果
#### 3.5.2 中级能力：远程调用RPC
#### 3.5.2 高级能力：互联互通、动态修改
### 3.6 JavaScript

## 第4章. frida-scripts
### 4.1 iOS篇
### 4.2 Android篇
#### 4.2.1 frida_android_trace.js. Full-featured Java and Module tracer for Android.
#### 4.2.2 frida_android_enum.js. Collection of functions to enumerate Java classes and methods.
#### 4.2.3 Enumerate loaded classes
#### 4.2.4 Class description
#### 4.2.5 Hook io InputStream
#### 4.2.6 Android make Toast
#### 4.2.7 Await for specific module to load
#### 4.2.8 Print all runtime strings & stacktrace
#### 4.2.9 String comparison
#### 4.2.10 Hook JNI by address
#### 4.2.11 Hook constructor
#### 4.2.12 Hook Java reflection
#### 4.2.13 Trace class
#### 4.2.14 SSL pinning bypass
...
...

## 第5章. frida高级应用
### 5.1 静态分析(r2frida, IDA plugin)
### 5.2 动态分析
### 5.3 数据提取
### 5.4 流程分析
### 5.5 接口分析
### 5.6 协议分析
### 5.7 协议fuzz
### 5.8 抓包解包(brida)
### 5.9 改包重放(brida)
### 5.10 加密解密
### 5.11 脱壳去保护
### 5.12 各种检测bypass
### 5.13 反调试与反反调试
### 5.14 综合攻防（一）
### 5.15 综合攻防（二）
### 5.16 综合攻防（三）

## 第6章. hook技巧总结（Java、C/C++、ObjC、JS）
### 6.1 C/C++
### 6.2 Java
#### 6.2.1 变量、参数、自定义参数
#### 6.2.2 函数、隐藏函数、构造函数、重载
#### 6.2.3 自定义类、内部类、匿名内部类、抽象类
#### 6.2.4 ......
### 6.3 ObjC
### 6.4 JS

## 第7章. 二次开发基础
### 7.1 JavaScript API：基本架构
### 7.2 JavaScript API：数据类型
### 7.3 JavaScript API：进程接口
### 7.4 JavaScript API：网络接口
### 7.5 JavaScript API：文件接口
### 7.6 C API

## 第8章. 二次开发案例
### 8.1 Appmon
### 8.2 brida
### 8.3 r2frida
### 8.4 objection
### 8.5 ssl_logger
### 8.6 passionfruit
