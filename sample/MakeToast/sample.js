Java.perform(function(){ 
    var Runnable = Java.use('java.lang.Runnable');
    var Toast = Java.use('android.widget.Toast');
    var currentApplication = Java.use('android.app.ActivityThread').currentApplication();
    var context = currentApplication.getApplicationContext();
    var packageName = currentApplication.getPackageName();
    var packageManager = currentApplication.getPackageManager();
    var activityInfo = packageManager.getLaunchIntentForPackage(packageName).resolveActivityInfo(packageManager, 0);
    var MainActivity = activityInfo.name.value;
    var CharSequence = Java.use('java.lang.CharSequence');
    var jString = Java.use('java.lang.String');
    var ToastRunnable = Java.registerClass({
	name: 'ToastRunnable',
	implements: [Runnable, ],
	methods: {
	    run: function(){
		console.log("ToastRunnable run");
		var charSequence = Java.cast(jString.$new("hello"), CharSequence);
		Toast.makeText(context, charSequence, 0).show();
	    }
	}
    })
    var flag = false;
    Java.choose(MainActivity, {
	onMatch: function(obj){
	    console.log('onMatch');
	    if(!flag){
		obj.runOnUiThread(ToastRunnable.$new())
		flag = true;
	    }
	},
	onComplete: function(){console.log("onComplete")}
    })
})

