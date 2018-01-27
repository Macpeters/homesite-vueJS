// Here's my data model
var ShopList = function(images) {
  var self = this;
  self.prints = ko.observableArray();
  self.magnets = ko.observableArray();
  self.buttons = ko.observableArray();
  self.stickers = ko.observableArray();
  self.giftPacks = ko.observableArray();

  self.printChoice = ko.observable(image_url_for_choice("gratitude"));
  self.magnetChoice = ko.observable(image_url_for_choice("gratitude"));
  self.giftPackChoice = ko.observable(image_url_for_choice("bliss"));

  setupImageCategories(images);

  self.popup = function() {
		var popupOpen = ((window.innerWidth > 0) ? window.innerWidth : screen.width) > 0;
		if(popupOpen){
			$('.imagepreview').attr('src', this.url);
			$('.imagepreview').attr('alt', this.title);
			$('.imagepreview-title').text(this.title);
			$('#imagemodal').modal('show');
		}
	};

  self.selectArt = function(item){
    var selector = "#" + item.shop_item + " :selected"
    var el = $(selector).text().toLowerCase().split(" ")[0]
    var image_url = image_url_for_choice(el);
    switch(item.shop_item){
      case "magnets":
        self.magnetChoice(image_url);
        break;
      case "prints":
        self.printChoice(image_url);
        break;
      case "gift-packs":
        self.giftPackChoice(image_url);
        break;
    }
  }

  function image_url_for_choice(choice){
    var base_url = "images/fineArt/";
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

  function setupImageCategories(images){
    for(var i = 0; i < images.length; i++){
      switch(images[i].shop_item){
        case "prints":
          self.prints().push(images[i]);
          break;
        case "magnets":
          self.magnets().push(images[i]);
          break;
        case "buttons":
          self.buttons().push(images[i]);
          break;
        case "stickers":
          self.stickers().push(images[i]);
          break;
        case "gift-packs":
          self.giftPacks().push(images[i]);
          break;
      }
    }
  }
};

var shopItems = [
  {
    title: "Limited Edition Framed Art Prints: $35",
    description: "High quality 8x10 inch prints, signed and numbered. Premium lustre and enhanced matte archival quality giclee",
    shop_item: "prints",
    image_urls: [ {
      url: "images/shop/prints.jpg",
      title: 'selection of 3 prints'
    },{
      url: "images/shop/prints2.jpg",
      title: 'framed print on wall'
    }]
  },
  {
    title: "Art Magnets: $3",
    description: "2x2 inch flat art magnets",
    shop_item: "magnets",
    image_urls: [ {
      url: "images/shop/magnets.jpg",
      title: 'Bliss magnets'
    },{
      url: "images/shop/magnets2.jpg",
      title: '5 art magnets on stainless steel fridge'
    }]
  },
  {
    title: "Art Buttons: 3 for $10",
    description: "1 inch square buttons - set of 3 Feels Monsters: Eagerness, Bliss, and Stubborn Resentment",
    shop_item: "buttons",
    image_urls: [ {
      url: "images/shop/buttons.jpg",
      title: 'Buttons'
    }]
  },
  {
    title: "Art Sticker Packs: 4 for $5",
    description: "4 inch square vinyl stickers - set of 4: Eagerness, Bliss, Shpongle, and Cracking Under the Pressure",
    shop_item: "stickers",
    image_urls: [ {
      url: "images/shop/stickers.jpg",
      title: 'Buttons'
    }]
  },
  {
    title: "Art Gift Packs: $40.",
    description: "Themed Packs available for Eagerness and Bliss, include 1 sticker, 1 giclee print, 1 button, and 1 magnet.  Mystery Packs include a sticker pack, 1 giclee print, 1 magnet, and 1 button at random.",
    shop_item: "gift-packs",
    image_urls: [ {
      url: "images/shop/giftPack.jpg",
      title: 'Bliss themed gift pack'
    },{
      url: "images/shop/giftPack2.jpg",
      title: 'Mystery gift pack'
    }]
  }
]

ko.applyBindings(new ShopList(shopItems)); // This makes Knockout get to work
