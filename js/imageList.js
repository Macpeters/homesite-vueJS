var ImageList = function(images) {
  var self = this;
  self.artImages = ko.observableArray(images);
  self.currentImage = ko.observable(images[0]);

  self.selectImage = function(){
    self.currentImage(this);
  }
};

var base_url = "images/fineArt/macpeters_"
var artImages = [
  {
    url: base_url + "fascination.png",
    title: "Eagerness",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Eagerness has his eye on a treat, and is in a hurry to get a taste of it.",
    category: "fine art",
    subcategory: "feels monsters",
    dimensions: "square"
  },
  {
    url: base_url + "eagerness.png",
    title: "Eagerness",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Eagerness has his eye on a treat, and is in a hurry to get a taste of it.",
    category: "fine art",
    subcategory: "feels monsters",
    dimensions: "square"
  },
  {
    url: base_url + "stubbornResentment.png",
    title: "Stubborn Resentment",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "He has had just about enough.  Careful you don't push him too far, as he's liable to lash out.",
    category: "fine art",
    subcategory: "feels monsters",
    dimensions: "square"
  },
  {
    url: base_url + "bliss.png",
    title: "Bliss",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "As a jellyfish, Bliss has no weight, and no resistance to the changing currents of the world. He enjoys every ripple to the fullest extent.",
    category: "fine art",
    subcategory: "feels monsters",
    dimensions: "square"
  },
    //All the Feels
  {
    url: base_url + "gratitude.jpg",
    title: "Gratitude",
    subtitle: "24x24 UV Acrylic on canvas",
    description: "Accepting the gift of light, and giving gratitude in return.",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: base_url + "mischeif.png",
    title: "Mischief",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Did you see snakes in her hair?  Look again.  Mischief likes to play harmless tricks.  She is the spirit of Nature in spring, playful and fun.",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: base_url + "maskedFear.png",
    title: "Masked Fear",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Afraid to come out of the dark, Fear holds out a scary mask to frighten away whatever might be waiting out there.",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: base_url + "crackingUnderThePressure.png",
    title: "Cracking Under the Pressure",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Intense pressure and stress mean that you've outgrown your shell - when it cracks, you are free to grow a new one.  Check out Twerski on stress for a neat talk.",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: base_url + "monsterball.jpg",
    title: "Monsterball",
    subtitle: "12x12 UV Acrylic on canvas",
    description: "Monsterball is everyone you meet who is putting up a false front.  You can't tell what their motivations are, so interacting with them is like trying to navigate a dark labyrinth, always wondering if it's even worth the trouble.  I mean, if they can't ever be honest, is knowing them more trouble than it's worth?",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: base_url + "shpongle.png",
    title: "Dancing With the Universe AKA Shpongle: Codex 6",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "You are the Universe enjoying a dance through one timeline from one perspective, and the Universe is watching your dance.",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: base_url + "starBird.jpg",
    title: "Star Bird",
    subtitle: "12x12 UV Acrylic on canvas",
    description: "Shooting through space, Star Bird is just enjoying the journey for what it is.",
    category: "fine art",
    subcategory: "sacred birds",
    dimensions: "square"
  },
  {
    url: base_url + "loveBird.jpg",
    title: "Love Bird",
    subtitle: "12x12 UV Acrylic on canvas",
    description: "Real Love persists when passion cools, and wants nothing in return.",
    category: "fine art",
    subcategory: "sacred birds",
    dimensions: "square"
  }
]

ko.applyBindings(new ImageList(artImages)); // This makes Knockout get to work
