//server only code

Meteor.startup(function () {
  if (RaceEvents.find().count() === 0) {
    var raceEventItems = [
      {
        name: "Östgötaloppet",
        date: new Date(2015, 04, 12),
        location: "Ljungsbro"
      },
    ];
    _.each(raceEventItems, function (item) {
      RaceEvents.insert(item);
    });
  }
  if (Races.find().count() === 0) {
    relatedEvent = RaceEvents.findOne({name: "Östgötaloppet", date : new Date(2015, 04, 12)});
    var items = [
      {
        raceEvent: relatedEvent._id,
        raceClass: "Elite Men",
        raceLength: 104

      },
    ];
    _.each(items, function (item) {
      Races.insert(item);
    });
  }
  if (Riders.find().count() === 0) {
    var ridersItems = [
      {
        firstName: "Alexander",
        lastName: "Gingsjö"
      },
      {
        firstName: "Alexander",
        lastName: "Wetterhall"
      }
    ];
    _.each(ridersItems, function (item) {
      Riders.insert(item);
    });
  }
  if (Results.find().count() === 0) {
    relatedRace = Races.findOne({raceClass: "Elite Men"});
    var resultsItems = [
      {
        race: relatedRace._id,
        rider: Riders.findOne({lastName: 'Gingsjö'})._id,
        position: 1,
        time: 13000
      },
      {
        race: relatedRace._id,
        rider: Riders.findOne({lastName: 'Wetterhall'})._id,
        position: 2,
        time: 13000
      },
    ];
    _.each(resultsItems, function (item) {
      Results.insert(item);
    });
  }
});