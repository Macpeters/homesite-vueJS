// Here's my data model
var cartoonList = function(images) {
  var self = this;
  self.cartoons = ko.observableArray(images);
  self.currentImage = ko.observable(images[0]);

  self.selectImage = function(){
    self.currentImage(this);
  }
};

var base_url = "../images/cartoons/macpeters_";
var base_keywords = "comic, funny, webcomic, cartoon, cartooning, digital art, ipad, autodesk, sketchbook, digital drawing, drawing, sketch, ";

var cartoonImages = [
  {
    url: base_url + "festivalfrog.png",
    title: "Festival Frog",
    description: "This frog hearts music festivals.",
    keywords: base_keywords + "festival, music festival, edm, heart, hand heart, frog, plur"
  },
  {
    url: base_url + "mu.png",
    title: "Mu",
    description: "Sassy Cow refuses to get dragged into a fight.",
    keywords: base_keywords + "sassy, cow, beef, no beef, pacifist, vegan, vegetarian, no war, plur"
  },
  {
    url: base_url + "ursula.png",
    title: "Ursula",
    description: "Ursula reimagined.",
    keywords: base_keywords + "ariel, disney, ursula, little mermaid, sea witch, villain, cecaelian, animal alphabets, movie character"
  },
  {
    url: base_url + "voldemort.png",
    title: "Voldemort",
    description: "Voldemort isn't best friends with Harry Potter, for some reason.",
    keywords: base_keywords + "voldemort, harry potter, slytherin, gryphindor, hufflepuff, magic, wizardry, hogwarts, snake, parseltongue, petulant, pouty, he-who-must-not-be-named, fan art, animal alphabets"
  },
  {
    url: base_url + "wolfman.png",
    title: "Wolfman",
    description: "The wolfman is now more accepting of his whole self.",
    keywords: base_keywords + "wolfman, fright night, frightenstein, film character, werewolf, bela lugosi, cross-dressing, pretty man, beast man, beast, wolf, flirty, fan art, animal alphabets"
  },
  {
    url: base_url + "canary.png",
    title: "Canary Yellow",
    description: "Just a little songbird - monochromatic.",
    keywords: base_keywords + "canary, songbird, yellow, yellow canary, monochromatic art, color collective, colour study"
  }
]

ko.applyBindings(new cartoonList(cartoonImages)); // This makes Knockout get to work
