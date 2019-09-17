Java.perform(function(){
	var Intent = Java.use('android.content.Intent');
	Intent.$init.overload('java.lang.String').implementation = function(obj){
		console.log(obj);
		return this.$init(obj);
	}
})
