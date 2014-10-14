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
      lat_long = [];
      var lat = data.latitude;
      var lng = data.longitude;
      lat_long.push(lat, lng);

      var position = Mapper.createGoogleLatLng(lat_long);
      var marker = Mapper.createGoogleMarker(position);

      Mapper.placeMarker(marker, position);
    });
  },

  createGoogleLatLng: function(lat_long){
    var lat = lat_long[0]
    var lng = lat_long[1]
    return new google.maps.LatLng(lat, lng);
  },

  createGoogleMarker: function(position){
    return marker = new google.maps.Marker({
          map: Mapper.map,
          draggable: false,
          position: position
      });
  },

  placeMarker: function(marker, lat_long){
    marker.setPosition(lat_long);
  },

  removeMarkers: function(){
    // clear map of all markers
  }

}
