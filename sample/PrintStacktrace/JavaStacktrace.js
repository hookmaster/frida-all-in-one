Java.perform(
	function(){
		var ToastCls = Java.use('android.widget.Toast');
		var ThrowableCls = Java.use('java.lang.Throwable');
		ToastCls.makeText.overload('android.content.Context', 'java.lang.CharSequence', 'int').implementation = function (a1,a2,a3) {
			console.log("toast makeText: " + a2);
			var StackTrace = ThrowableCls.$new().getStackTrace()
			for(var stack in StackTrace)
			{
				console.log(StackTrace[stack]);
			}
			return this.makeText(a1,a2,a3);
		}
		console.log("hooked");
	}
);

/** Java Code
 *     protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        TextView tv = findViewById(R.id.sample_text);
        tv.setText(stringFromJNI());
        tv.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Toast.makeText(getApplicationContext(), "test", Toast.LENGTH_LONG).show();
            }
        });
    }
 * 
 */

/** output:
 * 
 * hooked
 * toast makeText: test
 * android.widget.Toast.makeText(Native Method)
 * cn.hluwa.fridasamples.MainActivity$1.onClick(MainActivity.java:27)
 * android.view.View.performClick(View.java:5204)
 * android.view.View$PerformClick.run(View.java:21153)
 * android.os.Handler.handleCallback(Handler.java:739)
 * android.os.Handler.dispatchMessage(Handler.java:95)
 * android.os.Looper.loop(Looper.java:148)
 * android.app.ActivityThread.main(ActivityThread.java:5417)
 * java.lang.reflect.Method.invoke(Native Method)
 * com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:726)
 * com.android.internal.os.ZygoteInit.main(ZygoteInit.java:616)
 */