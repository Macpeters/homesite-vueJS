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

var slideImages = [
  {
    url: "images/slideshow/fineArt.png",
    title: "Fine Art",
    link: "art.html#fineArt"
  },
  {
    url: "images/slideshow/artGifts.png",
    title: "Art Gifts",
    link: "artGifts.html"
  },
  {
    url: "images/slideshow/games.png",
    title: "Web and Mobile Games",
    link: "dev.html#games"
  },
  {
    url: "images/slideshow/stopMotion.png",
    title: "Stop Motion Animations",
    link: "#"
  },
  {
    url: "images/slideshow/murals.png",
    title: "Murals",
    link: "art.html#graf"
  },
  {
    url: "images/slideshow/tarot.png",
    title: "Hidden Dreams Tarot",
    link: "#"
  },
  {
    url: "images/slideshow/skateboards.png",
    title: "Skateboard Decks",
    link: "art.html#skateboard"
  }
]

ko.applyBindings(new SlideShow(slideImages)); // This makes Knockout get to work
