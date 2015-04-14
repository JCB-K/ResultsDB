//client only code

Template.events.helpers({
  events: function(){
    return Events.find({});
  }
});

Template.raceEvent.helpers({
  races: function () {
    return Races.find({raceEvent: this.valueOf()._id}, {
      sort: { order: 1 },
    });
  }
});