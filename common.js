//code shared between client and server


RaceEvents = new Mongo.Collection("raceevents");
Races = new Mongo.Collection("races");
Riders = new Mongo.Collection("riders");
Results = new Mongo.Collection("results");

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('raceEvents');
});

Router.route('/events/:name/:year', function () {
  var raceEvent = RaceEvents.findOne({name: this.params.name});
  this.render('raceEvent', {data: raceEvent});
});