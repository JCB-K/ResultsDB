//code shared between client and server


Events = new Mongo.Collection("events");
Races = new Mongo.Collection("races");

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('events');
});

Router.route('/events/:name/:year', function () {
  var raceEvent = Events.findOne({name: this.params.name});
  this.render('raceEvent', {data: raceEvent});
});