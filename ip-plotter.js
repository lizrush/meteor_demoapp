if (Meteor.isClient) {

  Template.ipform.events({
    'click button': function () {

      var input_string = document.getElementById("ip-inputs").value;
      var ip_array = input_string.replace(/\s+/g, '').split(",");

      console.log(ip_array)
      // TODO:
      //        iterate over ips
      //        fetch latlongs
      //        drop pins on map
    }
  });

  Template.example.events({
    'click button': function () {
      console.log("example button clicked");

      var example_ips = [[51.5, -0.13],
                          [57.7333, 12.05],
                          [13.7, 100.4667],
                          [53.4559, 35.188],
                          [25, 45],
                          [42.556, -83.1178],
                          [40.5, 47.5],
                          [17.4833, -88.1833],
                          [-8.05, -34.9]];

      //        drop pins on map
    }
  });

  Template.map.rendered = function() {
    Mapper.initializeMap("map-canvas");
  };

  Template.map.events({
    'click button': function () {
      // TODO: clear map of previously dropped pins
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
