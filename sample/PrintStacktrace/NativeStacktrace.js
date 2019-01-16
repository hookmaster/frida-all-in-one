Interceptor.attach(Module.findExportByName("libnative-lib.so", 'Java_cn_hluwa_fridasamples_MainActivity_stringFromJNI'),
{
    onEnter: function (args) {
        console.log(Thread.backtrace(this.context, Backtracer.FUZZY)
        .map(DebugSymbol.fromAddress).join("\n"))
    },
    onLeave: function (retval) {
    }
});

/** output
 * 
 * 0xb38796ec base.odex!oatexec+0x596ec
 * 0x73fc33de system@framework@boot.oat!oatexec+0x104a3de
 * 0x73755a08 system@framework@boot.oat!oatexec+0x7dca08
 * 0x73fd47fc system@framework@boot.oat!oatexec+0x105b7fc
 * 0x73755a5c system@framework@boot.oat!oatexec+0x7dca5c
 * 0x73d31dee system@framework@boot.oat!oatexec+0xdb8dee
 * 0xb48febf0 libart.so!0xd9bf0
 * 0xb48fd332 libart.so!0xd8332
 * 0xb4c199ae libart.so!art_quick_invoke_static_stub+0xad
 * 0xb4b427f6 libart.so!0x31d7f6
 * 0xb4903992 libart.so!_ZN3art9ArtMethod6InvokeEPNS_6ThreadEPjjPNS_6JValueEPKc+0x125
 * 0xb4b45c62 libart.so!_ZN3art12InvokeMethodERKNS_33ScopedObjectAccessAlreadyRunnableEP8_jobjectS4_S4_j+0x2a5
 * 0x7425b0d8 system@framework@boot.oat!oatexec+0x12e20d8
 * 0x7425b0d8 system@framework@boot.oat!oatexec+0x12e20d8
 * 0xb4afb0c0 libart.so!0x2d60c0
 * 0x731cdeea system@framework@boot.oat!oatexec+0x254eea
 */

/** 官方文档： https://frida.re/docs/javascript-api/#thread
 * 
 * Thread.backtrace([context, backtracer]): generate a backtrace for the current thread, returned as an array of NativePointer objects.
 * If you call this from Interceptor’s onEnter or onLeave callbacks you should provide this.context for the optional context argument, 
 * as it will give you a more accurate backtrace. Omitting context means the backtrace will be generated from the current stack location, 
 * which may not give you a very good backtrace due to V8’s stack frames. The optional backtracer argument specifies the kind of backtracer to use, 
 * and must be either Backtracer.FUZZY or Backtracer.ACCURATE, where the latter is the default if not specified. 
 * The accurate kind of backtracers rely on debugger-friendly binaries or presence of debug information to do a good job, 
 * whereas the fuzzy backtracers perform forensics on the stack in order to guess the return addresses, which means you will get false positives, 
 * but it will work on any binary.
 */