//server only code

Meteor.startup(function () {
  if (Events.find().count() === 0) {
    var eventItems = [
      {
        name: "Östgötaloppet",
        date: new Date(2015, 04, 12),
        location: "Ljungsbro"
      },
    ];
    _.each(eventItems, function (item) {
      Events.insert({
        name: item.name,
        date: item.date,
        location: item.location
      });
    });
  }
  if (Races.find().count() === 0) {
    relatedEvent = Events.findOne({name: "Östgötaloppet", date : new Date(2015, 04, 12)});
    var items = [
      {
        raceEvent: relatedEvent._id,
        raceClass: "Elite Men",
        raceLength: 104

      },
    ];
    _.each(items, function (item) {
      Races.insert({
        raceEvent: item.raceEvent,
        raceClass: item.raceClass,
        racelength: item.raceLength,
      });
    });
  }
});