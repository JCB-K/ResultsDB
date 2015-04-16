//client only code

Template.raceEvents.helpers({
  raceEvents: function(){
    return RaceEvents.find({});
  }
});

Template.raceEvent.helpers({
  races: function () {
    return Races.find({raceEvent: this.valueOf()._id}, {
      sort: { order: 1 },
    });
  },
  results: function () {
    return Results.find({race: this.valueOf()._id}, {
      sort: { order: 1 },
    });
  }
});

Template.result.helpers({
  rider: function(){
    return Riders.findOne({_id: this.valueOf().rider});
  },
  parseSeconds: function(totalSeconds){
    hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    minutes = Math.floor(totalSeconds / 60);
    seconds = totalSeconds % 60;
    return hours + ":" + minutes + ":" + seconds;
  }
});