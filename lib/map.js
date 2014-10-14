Mapper = {

  baseUrl: "http://freegeoip.net/json/",
  markers: [],

  initializeMap: function(mapId){
    Mapper.lat_long_bounds = new google.maps.LatLngBounds();

    var mapOptions = {
      zoom: 1,
      center: new google.maps.LatLng(30, -10),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    Mapper.map = new google.maps.Map(document.getElementById(mapId), mapOptions);
  },

  createMarkersFromInput: function(ip_array){
    var unique_array = Mapper.uniqueArray(ip_array);

    for (var i = 0; i < unique_array.length; i++){
      Mapper.createMarker(unique_array[i]);
    };
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

      Mapper.markers.push(marker);
      Mapper.placeMarker(marker, position);
    });
  },

  createMarkersFromSample: function(ip_array){
    for (var i = 0; i < ip_array.length; i++){
      var lat_long = Mapper.createGoogleLatLng(ip_array[i]);
      var marker = Mapper.createGoogleMarker(lat_long);

      Mapper.markers.push(marker);
      Mapper.placeMarker(marker, lat_long);
    };
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
    for (var i = 0; i < Mapper.markers.length; i++ ) {
      Mapper.markers[i].setMap(null);
    };

    Mapper.markers = [];
  },

  uniqueArray: function(dirtyArray){
    var unique_array = [];

    for(var i = 0; i < dirtyArray.length; i++) {
      for(var j = i+1; j < dirtyArray.length; j++) {
        if (dirtyArray[i] === dirtyArray[j]) j = ++i;
        }
      unique_array.push(dirtyArray[i]);
    };

   return unique_array;
  }
}
