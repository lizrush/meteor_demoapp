Mapper = {

  baseUrl: "http://freegeoip.net/json/",

  initializeMap: function(mapId){
    Mapper.lat_long_bounds = new google.maps.LatLngBounds();

    var mapOptions = {
      zoom: 1,
      center: new google.maps.LatLng(30, -10),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    Mapper.map = new google.maps.Map(document.getElementById(mapId), mapOptions);
  },

  createMarkersFromIPs: function(ip_array){
    // for each ip in ips, createMarker
    Mapper.createMarker(ip_array[0]);
  },

  createMarker: function(ip){
    var url = encodeURI(Mapper.baseUrl + ip + "?callback=?");

    $.getJSON(url, function(data) {
      var latlong = new google.maps.LatLng(data.latitude, data.longitude);

      var marker = new google.maps.Marker({
          map: Mapper.map,
          draggable: false,
          position: latlong
      });

      Mapper.placeMarker(marker, latlong);
    });
  },

  placeMarker: function(marker, lat_long){
    marker.setPosition(lat_long);
  },

  removeMarkers: function(){
    // clear map of all markers
  }

}
