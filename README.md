## README

This is a simple demo meteor.js app that will plot an input of IP addresses on a map.
The live version can be found at http://ip-mapper.meteor.com

TODOs:

style:
- [ ] disable "plot my ips" button when there is no input
- [ ] remove bootstrap for something nicer/roll my own
- [ ] replace css with sass or less
- [ ] turn title text in the jumbotron into an SVG for responsive scaling
- [ ] create media breakpoints for better map size/header image handling
- [ ] iterate on design elements for a more cohesive look

content:
- [ ] refactor createMarkersFromSample & createMarkersFromInput to avoid duplication
- [ ] add error handling
- [ ] implement a regex to ensure ip addresses are valid before geocoding
- [ ] figure out meteor app structure best practices and update accordingly
- [ ] replace google maps with FLOSS alternative
- [ ] add analytics/user event tracking
- [ ] potential feature: initialize app with a dropped marker based on user's ip on first visit utilizing html5 location request - currently if nothing is passed into the input it will plot the visitors IP without requesting access to location
