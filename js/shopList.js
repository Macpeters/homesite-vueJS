// Here's my data model
var ShopList = function() {
  var self = this;

  self.printChoice = ko.observable(image_url_for_choice("gratitude"));
  self.magnetChoice = ko.observable(image_url_for_choice("gratitude"));
  self.giftPackChoice = ko.observable(image_url_for_choice("bliss"));

  self.selectPrint = function(){
    var selector = "#prints :selected";
    var el = $(selector).text().toLowerCase().split(" ")[0]
    var image_url = image_url_for_choice(el);
    self.printChoice(image_url);
  }

  self.selectMagnet = function(){
    var selector = "#magnets :selected";
    var el = $(selector).text().toLowerCase().split(" ")[0]
    var image_url = image_url_for_choice(el);
    self.magnetChoice(image_url);
  }

  self.selectGift = function(){
    var selector = "#gift-packs :selected";
    var el = $(selector).text().toLowerCase().split(" ")[0]
    var image_url = image_url_for_choice(el);
    self.giftPackChoice(image_url);
  }

  function image_url_for_choice(choice){
    var base_url = "../images/fineArt/macpeters_";
    var filename = "";
    switch(choice){
      case "eagerness":
        filename = "eagerness.png";
        break;
      case "stubborn":
        filename = "stubborn.png";
        break;
      case "bliss":
        filename = "bliss.png";
        break;
      case "gratitude":
        filename = "gratitude.jpg";
        break;
      case "mischeif":
        filename = "mischeif.png";
        break;
      case "masked":
        filename = "masked.png";
        break;
      case "cracking":
        filename = "cracking.png";
        break;
      case "monsterball":
        filename = "monsterball.jpg";
        break;
      case "shpongle":
        filename = "shpongle.png";
        break;
      case "starbird":
        filename = "starBird.jpg";
        break;
      case "lovebird":
        filename = "loveBird.jpg";
        break;
      default:
        filename = "mystery.png";
        break;
    }
    return base_url + filename;
  }
};

ko.applyBindings(new ShopList()); // This makes Knockout get to work
