
function RpcChannel_SendOneRaw(msg) {
	var RpcChannel_SendOneRaw_addr = Module.findExportByName(null, "RpcChannel_SendOneRaw");
	var RpcChannel_SendOneRaw_func = new NativeFunction(RpcChannel_SendOneRaw_addr, 'char', ['pointer', 'int64', 'pointer', 'pointer'], 'win64');

	var msg_string = Memory.allocUtf8String(msg)
	var len = new Int64(msg.length);
	RpcChannel_SendOneRaw_func(msg_string, len, NULL, NULL);
}

var msg = "info-set guestinfo.test12222";
RpcChannel_SendOneRaw(msg);

//new NativeFunction(friendlyFunctionPtr, 'void', ['pointer', 'pointer']);

Interceptor.attach(Module.findExportByName(null, "RpcChannel_Send"), {
	onEnter: function(args) {
		this.data = args[1];
		this.datalen = parseInt(args[2]);
		this.presult = args[3];
		this.presultLen = args[4];

		//console.log("RpcChannel_Send onEnter RpcChannel:", args[0]);
		console.log("RpcChannel_Send onEnter(\"" + this.data + "\"," + this.datalen + ")");
		var buf = Memory.readByteArray(this.data, this.datalen);
		console.log(hexdump(buf, {
			offset: 0,
			length: this.datalen,
			header: true,
			ansi: true
		}));
		
	},
	onLeave: function(retval) {

		if (this.presult != 0 && this.presultLen != 0) {
			var ppresult = Memory.readPointer(this.presult);
			var resultLen = Memory.readU64(this.presultLen);

			console.log("RpcChannel_Send onLeave(\"" + ppresult + "\"," + resultLen + ")");
			var buf = Memory.readByteArray(ppresult, resultLen);
			console.log(hexdump(buf, {
				offset: 0,
				length: resultLen,
				header: true,
				ansi: true
			}));
		}
	}
});