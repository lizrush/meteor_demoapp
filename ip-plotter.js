if (Meteor.isClient) {

  Template.ipform.events({
    'click button': function() {
      var input_string = document.getElementById("ip-inputs").value;
      var ip_array = input_string.replace(/\s+/g, '').split(",");

      Mapper.createMarkersFromInput(ip_array);
    }
  });

  Template.example.events({
    'click button': function(){
      var example_ips = [[51.5, -0.13],
                          [57.7333, 12.05],
                          [13.7, 100.4667],
                          [53.4559, 35.188],
                          [25, 45],
                          [42.556, -83.1178],
                          [40.5, 47.5],
                          [17.4833, -88.1833],
                          [-8.05, -34.9]];

      Mapper.createMarkersFromSample(example_ips);
    }
  });

  Template.map.rendered = function() {
    Mapper.initializeMap("map-canvas");
  };

  Template.map.events({
    'click button': function() {
      Mapper.removeMarkers();
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
