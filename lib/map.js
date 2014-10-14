Mapper = {

    baseUrl: "http://freegeoip.net/json/",

    initializeMap: function(mapId){
        Mapper.lat_long_bounds = new google.maps.LatLngBounds();

        var mapOptions = {
            zoom: 1,
            center: new google.maps.LatLng(30, -10),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        Mapper.map = new google.maps.Map(document.getElementById(mapId), mapOptions);
    }
}
