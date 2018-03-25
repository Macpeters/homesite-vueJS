// Here's my data model
var muralList = function(images) {
  var self = this;
  self.murals = ko.observableArray(images);
  self.currentImage = ko.observable(images[0]);

  self.selectImage = function(){
    self.currentImage(this);
  }
};

var base_url = "../images/graf/macpeters_";
var base_keywords = "mural, wall art, public art, art for hire, ";

var muralImages = [
  {
    url: base_url + "octoBuddy.png",
    title: "Octo-buddy",
    subtitle: "Acrylic on wall at Fulton Fitness, St. Catherines",
    description: "Weight lifting octopus gives encouragement to those working out at Fulton Fitness.",
    keywords: base_keywords + "octopuss, wight lifter, exercise, keeping in shape, fulton fitness, working out, motivation, tentacles"
  },
  {
    url: base_url + "demolitionParty.jpg",
    title: "Alien summoning magic sweets",
    subtitle: "UV reactive acrylic on wall",
    description: "With the building to be demolished soon - this collaborative mural was done in the spirit of coming together to make friends, and create a magical experience.",
    keywords: base_keywords + "building, demolition, free for all, blacklight, jungle, dnb, party, collaboration, party art, pyramid, alien, summoning, sweetness, sugar, tentacles"
  },
  {
    url: base_url + "pastaMancer.jpg",
    title: "Delicious Mushroom Wizard",
    subtitle: "Spray paint, brush paint on wall",
    description: "Mushroom Wizard enjoying some pasta at Pastamancers in London, Ontario",
    keywords: base_keywords + "restaurant, pastamancers, pasta, mushroom, spagetti, noodles, tomato sauce, yummy, magic spice, wizard, spray paint, aerosol"
  },
  {
    url: base_url + "chamBee.png",
    title: "Chameleon, Wasp",
    subtitle: "Spray paint on garage door",
    description: "Chameleon, Sassy Wasp, painted on garage doors in the Alleyway of Dreams, Toronto.",
    keywords: "alleyway of dreams, alley, back alley, garage door, outdoor art, public art, spray paint, aerosol, wasp, bee, chameleon, sunset"
  },
  {
    url: base_url + "ribbit.jpg",
    title: "Ribbit",
    subtitle: "Spray paint on wooden door",
    description: "Painted during a workshop at Mural Routes, Scarborough.",
    keywords: "frog, storm, ribbit, workshop, mediah, spraypaint, mural routes, scarborough, outdoor art"
  },
  {
    url: base_url + "mouseNBot.png",
    title: "Oily Robot and Spray Mouse",
    subtitle: "Spray paint on abandoned construction wood",
    description: "Robot drooling oil, painted on abandoned construction board.  On the other side, a spray painting mouse",
    keywords: "robot, oil, drool, recycled, spraypaint, underpass park, under a bridge, mouse, montana, m94"
  }
]

ko.applyBindings(new muralList(muralImages)); // This makes Knockout get to work
