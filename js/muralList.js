// Here's my data model
var muralList = function(images) {
  var self = this;
  self.murals = ko.observableArray(images);
  self.currentImage = ko.observable(images[0]);

  self.selectImage = function(){
    self.currentImage(this);
  }
};

var base_url = "../images/graf/macpeters_"

var muralImages = [
  {
    url: base_url + "octoBuddy.png",
    title: "Octo-buddy",
    subtitle: "Acrylic on wall at Fulton Fitness, St. Catherines",
    description: "Weight lifting octopus gives encouragement to those working out at Fulton Fitness."
  },
  {
    url: base_url + "demolitionParty.jpg",
    title: "Alien summoning magic sweets",
    subtitle: "UV reactive acrylic on wall",
    description: "With the building to be demolished soon - this collaborative mural was done in the spirit of coming together to make friends, and create a magical experience."
  },
  {
    url: base_url + "pastaMancer.jpg",
    title: "Delicious Mushroom Wizard",
    subtitle: "Spray paint, brush paint on wall",
    description: "Mushroom Wizard enjoying some pasta at Pastamancers in London, Ontario"
  },
  {
    url: base_url + "chamBee.png",
    title: "Chameleon, Wasp",
    subtitle: "Spray paint on garage door",
    description: "Chameleon, Sassy Wasp, painted on garage doors in the Alleyway of Dreams, Toronto."
  },
  {
    url: base_url + "ribbit.jpg",
    title: "Ribbit",
    subtitle: "Spray paint on wooden door",
    description: "Painted during a workshop at Mural Routes, Scarborough."
  },
  {
    url: base_url + "mouseNBot.png",
    title: "Oily Robot and Spray Mouse",
    subtitle: "Spray paint on abandoned construction wood",
    description: "Robot drooling oil, painted on abandoned construction board.  On the other side, a spray painting mouse"
  }
]

ko.applyBindings(new muralList(muralImages)); // This makes Knockout get to work
