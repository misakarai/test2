document.getElementById('helloWorld').innerHTML = 'Hello, World!';


navigator.geolocation.watchPosition(
    function(position){
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        var lat1 = lat*10000;
        lat1 = Math.floor(lat1)/10000;
        
        
        document.getElementById("myPos").innerHTML = "緯度:"+lat1+"<br>経度:"+lng;
        },
    function(error){
    document.getElementById("myPos").innerHTML = "えらーこーど:"+error.code;
    }
);