var vmx_base = new NativePointer(Process.findModuleByName("vmware-vmx.exe").base);


var trfunc_addr = vmx_base.add(0x69220);
var trfunc_func = new NativeFunction(trfunc_addr, 'char', ['int64', 'uint16', 'pointer', 'int']);
Interceptor.attach(trfunc_func, {
	onEnter: function(args) {
		// console.log("trfunc called from:\n" +
		// 	Thread.backtrace(this.context, Backtracer.ACCURATE).map(DebugSymbol.fromAddress).join("\n") + "\n");
		this.data = args[2];
		this.datalen = parseInt(args[3]);

		var buf = Memory.readByteArray(this.data, this.datalen);
		console.log(hexdump(buf, {
			offset: 0,
			length: this.datalen,
			header: true,
			ansi: true
		}));

		console.log("trfunc onEnter", args[0], args[1], args[2], args[3]);
	},
	onLeave: function(result) {
		
		//console.log("trfunc onLeave");
	}
});