function getLocation (callback) {
	a = gps.getLocation();
	var t = setInterval(function(){
		if(a != null){
			socket.emit();
			clearInterval(t);
		}
	},1000);
}
