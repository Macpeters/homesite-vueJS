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
var base_keywords = "skateboards, skate art, skateboard art, painted decks, lowbrow, street art, recycled skateboards, sk8, skater, custom deck, psychedelic, visionary, ";
var skateboardImages = [
  {
    url: base_url + "brokenRobot.jpg",
    title: "Broken Robot",
    description: "With wires sparking, and cracked eyes, this poor robot needs some TLC",
    keywords: base_keywords + "robot, wires, tech, mech, bot, technology, broken robot, disassembled"
  },
  {
    url: base_url + "tikiFaces.jpg",
    title: "Super Friends",
    description: "An unusual group of characters",
    keywords: base_keywords + "faces, friends, super friends, unique characters, different faces, different colours, different expressions, totem, tropical, flowers"
  },
  {
    url: base_url + "drWho.jpg",
    title: "Dr Who: Exterminate",
    description: "Inspired by Dr Who: a tardis, a dalek, travel through time and space, and that question that can never be answered: Dr. Who?",
    keywords: base_keywords + "Dr Who, tardis, dalek, space travel, exterminate, time, space, time and relative dimension in space, doctor, time lords, companion, police box, blue box"
  },
  {
    url: base_url + "trickrtreat.jpg",
    title: "Sam from Trick R Treat",
    description: "Sam from the cult classic Trick R Treat movie",
    keywords: base_keywords + "trick 'r treat, sam, samhain, trick or treat, movie, candy, lollypop, halloween, blood, costume, burlap, candy corn, button eyes, spirit, kids, horror, film"
  },
  {
    url: base_url + "jerryBear.jpg",
    title: "Grateful Dead Jerry Bear",
    description: "Inspired by the music and art of the Grateful Dead band and movement",
    keywords: base_keywords + "grateful dead, the dead, jerry, jerry garcia, dancing bears, jerry bears, deadhead, hippy, festival, acid, nitrous, nitrous oxide, laughing gas, tour, heads, music, dancing, uncle john's band, scarlet begonia, wings, flight, high, high on life, eyes, drips, paint, fly"
  },
  {
    url: base_url + "psychedelicBee.jpg",
    title: "Psychedelic Bee",
    description: "Three eyed bee with veiny wings",
    keywords: base_keywords + "bee, three eyed, third eye, bug, insect, pollinator, flight, badass, flower, pollen, spread pollen"
  },
  {
    url: base_url + "mushroomEye.jpg",
    title: "Mushroom Eye",
    description: "Psychedelic skateboard painted at COSM during a Chris Dyer workshop",
    keywords: base_keywords + "mushroom, amanita, magic mushroom, red and white, eyeballs, many eyes, multi sight, symmetry, cosmic, energy, rainbows, fractals, sacred geometry, flower of life, mandala"
  }
]

ko.applyBindings(new skateboardList(skateboardImages)); // This makes Knockout get to work
