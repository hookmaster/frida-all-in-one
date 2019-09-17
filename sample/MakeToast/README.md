这是一个利用Frida弹Toast的demo。
因为`Java.perform`是运行在非主线程中，而toast是一个ui操作，必须运行在主线程中。
## 知识点：
1. Frida官方提供了`Java.scheduleOnMainThread`, 可以将你的`function`放到主线程运行,但其是通过`Looper.getMainLooper()`, 看起来并不好使。
2. 此sample里我利用了Android自带的`Activity.runOnUiThread`来切换到主线程, 但他是一个成员方法，所以需要先拿到一个实例。
3. 此处使用`Java.choose`来从内存中查找`Activity`, 不过直接填`android.app.Activity`是找不到的，必须查找其实现类，不可直接查找父类, 所以此处使用个体`PackageManager`来获取当前应用的`MainActivity`。
4. `runOnUiThread`的参数是一个`Runnable`, 而其是一个接口, 所以我们需要自己注册一个实现类, 所以使用`Java.registerClass`来实现，并在run方法中show Toast。
