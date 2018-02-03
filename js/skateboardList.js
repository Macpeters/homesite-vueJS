// Here's my data model
var skateboardList = function(images) {
  var self = this;
  self.skateboards = ko.observableArray(images);
  self.currentImage = ko.observable(images[0]);

  self.selectImage = function(){
    self.currentImage(this);
  }
};

var base_url = "../images/skateboards/macpeters_"
var skateboardImages = [
  {
    url: base_url + "brokenRobot.jpg",
    title: "Broken Robot",
    description: "With wires sparking, and cracked eyes, this poor robot needs some TLC",
    dimensions: "tall"
  },
  {
    url: base_url + "tikiFaces.jpg",
    title: "Super Friends",
    description: "An unusual group of characters",
    dimensions: "tall"
  },
  {
    url: base_url + "drWho.jpg",
    title: "Dr Who: Exterminate",
    description: "Inspired by Dr Who: a tardis, a dalek, travel through time and space, and that question that can never be answered: Dr. Who?",
    dimensions: "tall"
  },
  {
    url: base_url + "trickrtreat.jpg",
    title: "Sam from Trick R Treat",
    description: "Sam from the cult classic Trick R Treat movie",
    dimensions: "tall"
  },
  {
    url: base_url + "jerryBear.jpg",
    title: "Grateful Dead Jerry Bear",
    description: "Inspired by the music and art of the Grateful Dead band and movement",
    dimensions: "wide"
  },
  {
    url: base_url + "psychedelicBee.jpg",
    title: "Psychedelic Bee",
    description: "Three eyed bee with veiny wings",
    dimensions: "wide"
  },
  {
    url: base_url + "mushroomEye.jpg",
    title: "Mushroom Eye",
    description: "Psychedelic skateboard painted at COSM during a Chris Dyer workshop",
    dimensions: "wide"
  }
]

ko.applyBindings(new skateboardList(skateboardImages)); // This makes Knockout get to work
