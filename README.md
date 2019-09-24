# 《Frida操作手册》

>PS：by : [@hluwa](https://github.com/hluwa)  [@r0ysue](https://github.com/r0ysue) <br/>

## changelog：

|date|log|
|:-:|:-|
|2019-5-4|[`4.4 FRIDA脚本系列（四）更新篇：几个主要机制的大更新`](https://www.anquanke.com/post/id/177597)|
|2019-3-29|[`4.3 FRIDA脚本系列（三）超神篇：百度AI“调教”抖音AI`](04.FRIDA-SCRIPTS)|
|2019-1-16|[Brida操作指南](https://bbs.pediy.com/thread-248977.htm)|
|2019-1-11|[`4.2 FRIDA脚本系列（二）成长篇：动静态结合逆向WhatsApp`](04.FRIDA-SCRIPTS)|
|2019-1-9|FRIDA脚本系列其他脚本一：[介召几个frida在安卓逆向中使用的脚本以及延时Hook手法](https://bbs.pediy.com/thread-248848.htm)|
|2019-1-2|在SRC白帽沙龙上的frida分享：[The King Of Hooking Tools.pptx](https://github.com/hookmaster/frida-all-in-one/blob/master/FridaPPT/The%20King%20Of%20Hooking%20Tools.pptx)|
|2018-12-18|开始写安卓脚本系列[`4.2 FRIDA脚本系列（一）入门篇：在安卓8.1上dump蓝牙接口和实例`](04.FRIDA-SCRIPTS)|
|2018-12-13|增加子目录：frida高级应用：FRIDA检测方法汇总|
|2018-12-13|Imyang大佬发布[CVE-2017-4901 VMware虚拟机逃逸漏洞分析【Frida Windows实例】](https://bbs.pediy.com/thread-248384.htm)，安排在【frida高级应用：综合攻防】小节|
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
#### 3.1.1 [CVE-2017-4901 VMware虚拟机逃逸漏洞分析【Frida Windows实例】](https://bbs.pediy.com/thread-248384.htm)
### 3.2 macOS
### 3.3 Linux
### 3.4 iOS
### 3.5 [Android]
#### 3.5.1 [一篇文章带你领悟Frida的精髓（基于安卓8.1）](https://www.freebuf.com/articles/system/190565.html)
#### 3.5.2 [基本能力：hook参数、修改结果](https://github.com/hookmaster/frida-all-in-one#42-android%E7%AF%87%E5%AE%89%E5%8D%9381)
#### 3.5.3 中级能力：远程调用RPC
#### 3.5.4 [高级能力：互联互通、动态修改(Dwarf调试器)](https://github.com/iGio90/Dwarf)

## 第4章. FRIDA SCRIPT
### 4.1 iOS篇
### 4.2 Android篇（安卓8.1）
#### 4.2.1 [FRIDA SCRIPT的"hello world"](https://www.anquanke.com/post/id/168152#h2-1)
#### 4.2.2 [枚举所有的类并定位类](https://www.anquanke.com/post/id/168152#h2-2)
#### 4.2.3 [枚举类的所有方法并定位方法](https://www.anquanke.com/post/id/168152#h2-4)
#### 4.2.4 [案例一：综合案例：在安卓8.1上dump蓝牙接口和实例](https://www.anquanke.com/post/id/168152#h2-5)
#### 4.2.5 [hook方法的所有重载](https://www.anquanke.com/post/id/169315#h2-0)
#### 4.2.6 [hook类的所有方法](https://www.anquanke.com/post/id/169315#h2-1)
#### 4.2.7 [hook包下的所有类](https://www.anquanke.com/post/id/169315#h2-2)
#### 4.2.8 [hook本地库的导出函数](https://www.anquanke.com/post/id/169315#h2-3)
#### 4.2.9 [案例二：综合案例：动静态结合逆向WhatsApp](https://www.anquanke.com/post/id/169315#h2-4)
#### 4.2.5 Hook io InputStream
#### 4.2.6 [Android make Toast](https://github.com/hookmaster/frida-all-in-one/tree/master/sample/MakeToast)
#### 4.2.7 Await for specific module to load
#### 4.2.8 [Print stacktrace](https://github.com/hookmaster/frida-all-in-one/tree/master/sample/PrintStacktrace)
#### 4.2.9 [String comparison(Only working in dvm)](https://codeshare.frida.re/@dzonerzy/stringcompare/)
#### 4.2.10 [Hook JNI](https://github.com/chame1eon/jnitrace)
#### 4.2.11 [Hook constructor](https://github.com/hookmaster/frida-all-in-one/blob/master/sample/HookConstructor/sample.js)
#### 4.2.12 Hook Java reflection
#### 4.2.13 Trace class(waiting for ZenTrace to open source...)
#### 4.2.14 [SSL pinning bypass](https://codeshare.frida.re/@pcipolloni/universal-android-ssl-pinning-bypass-with-frida/)
#### 其他脚本一：[介召几个frida在安卓逆向中使用的脚本以及延时Hook手法](https://bbs.pediy.com/thread-248848.htm)
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
### 5.14 FRIDA检测方法汇总

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
