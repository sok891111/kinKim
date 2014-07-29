var location;
 var getLocation = function(callback){
    alert(gps.getLatitude());
    if(gps.getLatitude() ||gps.getLongitude() ){
        callback(gps.getLatitude() ,gps.getLongitude());
    }else{
        gps.showSettingsAlert();
        setTimeout(function(){getLocation()},1500);
    }
}
var sendCallbackLocation = function(lat, long){
    location = {
        "lat" : lat,
        "long" : long
    }
    console.log("새로운 위치 전송 합니다.");
    socket.emit("getLocation",location);
}