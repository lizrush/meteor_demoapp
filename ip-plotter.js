if (Meteor.isClient) {

  Template.ipform.events({
    'click button': function () {
      console.log("form button clicked");
      // TODO:  input as array
      //        iterate over ips
      //        fetch latlongs
      //        drop pins on map
    }
  });

  Template.example.events({
    'click button': function () {
      console.log("example button clicked");
      // TODO:  store lat longs for hard coded ips
      //        drop pins on map
  });

  Template.map.events({
    'click button': function () {
      console.log("clear map button clicked");
      // TODO: clear map of previously dropped pins
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
