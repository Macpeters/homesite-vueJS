// Here's my data model
var SlideShow = function(images) {
  var self = this;
  self.slideShowImages = images
  self.imageIndex = ko.observable(0);
  self.currentImage = ko.observable();


  function currentImages(){
    return self.slideShowImages[self.imageIndex()];
  }

  self.setSliderImage = function(image) {
    self.currentImage(image)
  }

  function setImage(image) {
    self.currentImage(image)
  }

  function nextImage(){
    self.imageIndex(self.imageIndex() + 1);
    if(self.imageIndex() >= self.slideShowImages.length){
      self.imageIndex(0);
    }
    setImage(self.slideShowImages[self.imageIndex()])
  }

  // Set the first image
  setImage(self.slideShowImages[self.imageIndex()]);

  // control the timer
  var sliderTime = 4000;
  var timer = setInterval( nextImage, sliderTime);
  $('.dot').hover(function(ev){
    clearInterval(timer);
  }, function(ev){
      timer = setInterval( nextImage, sliderTime);
  });
};

var base_url = "images/slideshow/macpeters_"
var slideImages = [
  {
    url: base_url + "fineArt.png",
    alt: "Macpeters Fine Art",
    title: "Fine Art",
    link: "art.html#fineArt"
  },
  {
    url: base_url + "artGifts.png",
    alt: "Macpeters Art Gifts: Pillows, Mugs, Tshirts, Phone Cases, and more",
    title: "Art Gifts",
    link: "artGifts.html"
  },
  {
    url: base_url + "games.png",
    alt: "Macpeters Independant Web and Mobile Games",
    title: "Web and Mobile Games",
    link: "dev.html#games"
  },
  {
    url: base_url + "murals.png",
    alt: "Macpeters Indoor and Outdoor Murals",
    title: "Murals",
    link: "art.html#graf"
  },
  {
    url: base_url + "hiddenDreamsTarot.png",
    alt: "Macpeters: Hidden Dreams Tarot Deck",
    title: "Macpeters: Hidden Dreams Tarot Deck",
    link: "tarot.html"
  },
  {
    url: base_url + "paintedSkateboards.png",
    alt: "Painted Skateboard Decks",
    title: "Skateboard Decks",
    link: "art.html#skateboard"
  }
]

ko.applyBindings(new SlideShow(slideImages)); // This makes Knockout get to work
