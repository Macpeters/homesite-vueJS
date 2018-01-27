// Here's my data model
var ImageList = function(images) {
  var self = this;
  self.feelsMonsters = ko.observableArray();
  self.allTheFeels = ko.observableArray();
  self.sacredBirds = ko.observableArray();
  self.skateboards = ko.observableArray();
  self.murals = ko.observableArray();
  setupImageCategories(images);

  self.popup = function() {
		var popupOpen = ((window.innerWidth > 0) ? window.innerWidth : screen.width) > 0;
		if(popupOpen){
			$('.imagepreview').attr('src', this.url);
			$('.imagepreview').attr('alt', this.title);
			$('.imagepreview-title').text(this.title);
			$('.imagepreview-description').text(this.description);
			$('#imagemodal').modal('show');
      //Set class
      if(this.dimensions == "square"){
        $('.imagepreview').addClass("square-preview")
      }else if(this.dimensions == "tall"){
        $('.imagepreview').removeClass("tall-preview")
      }else if(this.dimensions == "wide"){
        $('.imagepreview').removeClass("wide-preview")
      }
		}
	};

  function setupImageCategories(images){
    for(var i = 0; i < images.length; i++){
      if(images[i].category == "skateboards"){
        self.skateboards().push(images[i]);
      }else if(images[i].category == "murals"){
        self.murals().push(images[i])
      }else if(images[i].subcategory == "all the feels"){
        self.allTheFeels().push(images[i]);
      }else if(images[i].subcategory == "feels monsters"){
        self.feelsMonsters().push(images[i])
      }else if(images[i].subcategory == "sacred birds"){
        self.sacredBirds().push(images[i])
      }
    }
  }
};

var artImages = [
  //Fine Art
    // Feels Monsters
  {
    url: "images/fineArt/eagerness.png",
    title: "Eagerness",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Eagerness has his eye on a treat, and is in a hurry to get a taste of it.",
    category: "fine art",
    subcategory: "feels monsters",
    dimensions: "square"
  },
  {
    url: "images/fineArt/stubborn.png",
    title: "Stubborn Resentment",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "He has had just about enough.  Careful you don't push him too far, as he's liable to lash out.",
    category: "fine art",
    subcategory: "feels monsters",
    dimensions: "square"
  },
  {
    url: "images/fineArt/bliss.png",
    title: "Bliss",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "As a jellyfish, Bliss has no weight, and no resistance to the changing currents of the world. He enjoys every ripple to the fullest extent.",
    category: "fine art",
    subcategory: "feels monsters",
    dimensions: "square"
  },
    //All the Feels
  {
    url: "images/fineArt/gratitude.jpg",
    title: "Gratitude",
    subtitle: "24x24 UV Acrylic on canvas",
    description: "Accepting the gift of light, and giving gratitude in return.",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: "images/fineArt/mischeif.png",
    title: "Mischief",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Did you see snakes in her hair?  Look again.  Mischief likes to play harmless tricks.  She is the spirit of Nature in spring, playful and fun.",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: "images/fineArt/masked.png",
    title: "Masked Fear",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Afraid to come out of the dark, Fear holds out a scary mask to frighten away whatever might be waiting out there.",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: "images/fineArt/cracking.png",
    title: "Cracking Under the Pressure",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Intense pressure and stress mean that you've outgrown your shell - when it cracks, you are free to grow a new one.  Check out Twerski on stress for a neat talk.",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: "images/fineArt/monsterball.jpg",
    title: "Monsterball",
    subtitle: "12x12 UV Acrylic on canvas",
    description: "Monsterball is everyone you meet who is putting up a false front.  You can't tell what their motivations are, so interacting with them is like trying to navigate a dark labyrinth, always wondering if it's even worth the trouble.  I mean, if they can't ever be honest, is knowing them more trouble than it's worth?",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: "images/fineArt/shpongle.png",
    title: "Dancing With the Universe AKA Shpongle: Codex 6",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "You are the Universe enjoying a dance through one timeline from one perspective, and the Universe is watching your dance.",
    category: "fine art",
    subcategory: "all the feels",
    dimensions: "square"
  },
  {
    url: "images/fineArt/starBird.jpg",
    title: "Star Bird",
    subtitle: "12x12 UV Acrylic on canvas",
    description: "Shooting through space, Star Bird is just enjoying the journey for what it is.",
    category: "fine art",
    subcategory: "sacred birds",
    dimensions: "square"
  },
  {
    url: "images/fineArt/loveBird.jpg",
    title: "Love Bird",
    subtitle: "12x12 UV Acrylic on canvas",
    description: "Real Love persists when passion cools, and wants nothing in return.",
    category: "fine art",
    subcategory: "sacred birds",
    dimensions: "square"
  },
  //Skateboards
  {
    url: "images/skateboards/04_robot.jpg",
    title: "Broken Robot",
    subtitle: "Acrylic on busted skateboard (street deck)",
    description: "With wires sparking, and cracked eyes, this poor robot needs some TLC",
    category: "skateboards",
    subcategory: "",
    dimensions: "tall"
  },
  {
    url: "images/skateboards/08_tiki.jpg",
    title: "Super Friends",
    subtitle: "Acrylic on busted skateboard (street deck)",
    description: "An unusual group of characters",
    category: "skateboards",
    subcategory: "",
    dimensions: "tall"
  },
  {
    url: "images/skateboards/07_who.jpg",
    title: "Dr Who: Exterminate",
    subtitle: "Acrylic on busted skateboard (street deck)",
    description: "Inspired by Dr Who: a tardis, a dalek, travel through time and space, and that question that can never be answered: Dr. Who?",
    category: "skateboards",
    subcategory: "",
    dimensions: "tall"
  },
  {
    url: "images/skateboards/06_trickrtreat.jpg",
    title: "Sam from Trick R Treat",
    subtitle: "Acrylic on busted skateboard (street deck)",
    description: "Sam from the cult classic Trick R Treat movie",
    category: "skateboards",
    subcategory: "",
    dimensions: "tall"
  },
  {
    url: "images/skateboards/05_jerryBear.jpg",
    title: "Grateful Dead Jerry Bear",
    subtitle: "Acrylic on busted skateboard (street deck)",
    description: "Inspired by the music and art of the Grateful Dead band and movement",
    category: "skateboards",
    subcategory: "",
    dimensions: "wide"
  },
  {
    url: "images/skateboards/01_bee.jpg",
    title: "Psychedelic Bee",
    subtitle: "Acrylic on busted skateboard (street deck)",
    description: "Three eyed bee with veiny wings",
    category: "skateboards",
    subcategory: "",
    dimensions: "wide"
  },
  {
    url: "images/skateboards/02_mushEye.jpg",
    title: "Mushroom Eye",
    subtitle: "Acrylic on busted skateboard (street deck)",
    description: "Psychedelic skateboard painted at COSM during a Chris Dyer workshop",
    category: "skateboards",
    subcategory: "",
    dimensions: "wide"
  },
  //Murals
  {
    url: "images/graf/octopus.png",
    title: "Octo-buddy",
    subtitle: "Acrylic on wall at Fulton Fitness, St. Catherines",
    description: "Weight lifting octopus gives encouragement to those working out at Fulton Fitness.",
    category: "murals",
    subcategory: "",
    dimensions: "wide"
  },
  {
    url: "images/graf/demolition.jpg",
    title: "Alien summoning magic sweets",
    subtitle: "UV reactive acrylic on wall",
    description: "With the building to be demolished soon - this collaborative mural was done in the spirit of coming together to make friends, and create a magical experience.",
    category: "murals",
    subcategory: "",
    dimensions: "tall"
  },
  {
    url: "images/graf/pastaMancer.jpg",
    title: "Delicious Mushroom Wizard",
    subtitle: "Spray paint, brush paint on wall",
    description: "Mushroom Wizard enjoying some pasta at Pastamancers in London, Ontario",
    category: "murals",
    subcategory: "",
    dimensions: "tall"
  },
  {
    url: "images/graf/chamBee.png",
    title: "Chameleon, Wasp",
    subtitle: "Spray paint on garage door",
    description: "Chameleon, Sassy Wasp, painted on garage doors in the Alleyway of Dreams, Toronto.",
    category: "murals",
    subcategory: "",
    dimensions: "wide"
  },
  {
    url: "images/graf/ribbit.jpg",
    title: "Ribbit",
    subtitle: "Spray paint on wooden door",
    description: "Painted during a workshop at Mural Routes, Scarborough.",
    category: "murals",
    subcategory: "",
    dimensions: "wide"
  },
  {
    url: "images/graf/mouseNBot.png",
    title: "Oily Robot and Spray Mouse",
    subtitle: "Spray paint on abandoned construction wood",
    description: "Robot drooling oil, painted on abandoned construction board.  On the other side, a spray painting mouse",
    category: "murals",
    subcategory: "",
    dimensions: "wide"
  }
]

ko.applyBindings(new ImageList(artImages)); // This makes Knockout get to work
