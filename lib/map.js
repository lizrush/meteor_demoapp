Mapper = {

	baseUrl: "http://freegeoip.net/json/",

	initializeMap: function(mapId) {
			Mapper.lat_long_bounds = new google.maps.LatLngBounds();

			var mapOptions = {
				zoom: 1,
				center: new google.maps.LatLng(30, -10),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

			Mapper.map = new google.maps.Map(document.getElementById(mapId), mapOptions);
	},

	createMarkersFromIPs: function(ips) {
		// for each ip in ips, createMarker
	},

	createMarker: function(ip) {
    // call freegeo
    // if successful, create new marker
    // else, display error
  },

  placeMarker: function(marker, lat_lng) {
    // marker.setPosition(lat, long)
  },

  removeMarkers: function() {
  	// clear map of all markers
  }

}
