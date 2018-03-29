var ImageList = function(images) {
  var self = this;
  self.artImages = ko.observableArray(images);
  self.currentImage = ko.observable(images[0]);

  self.selectImage = function(){
    self.currentImage(this);
  }
};

var base_url = "images/fineArt/macpeters_"
var base_keywords = "painting, visionary, sci-fi, art, blacklight, uv reactive, psychedelic, psychedelic painting, fantasy, "
var artImages = [
  {
    url: base_url + "baphomet.png",
    title: "Baphomet - Magic Mushroom Magician",
    subtitle: "24x24 UV Acrylic on canvas",
    description: "Floating above the golden city that sits on the edge of the Amethyst Mountains, young Baphomet pays no mind to the dance of mortals, for he is filled with the light of the Universe. This piece is what I'm referring to as 'living art', because I haven't varnished it, and I don't plan to until it sells.  I find if I have art around for a little while, I start noticing things I'd like to change, because I've learned new tricks since then.  If I don't varnish the piece, I feel I have the option of going back and updating old art, so it stays interesting to me.  Maybe I'll ruin it, next time I touch it.  Who knows?  If you like how it looks right now, contact me for purchasing.",
    category: "fine art",
    subcategory: "Alternate Worlds",
    keywords: base_keywords + 'baphomet, goat, magician, wonder, magick, magic mushroom, wizardry, horns, horned beast, universal power, universal wonder, inner power, galaxies, otherworldly, glass mushroom, amethyst crystal, seaside city, stone city'
  },
  {
    url: base_url + "fascination.png",
    title: "Fascination",
    subtitle: "24x24 UV Acrylic on canvas",
    description: "Behold the biodiversity of this alien crystaline planet.  What wonders it might hold!",
    category: "fine art",
    subcategory: "Alternate Worlds",
    keywords: base_keywords + 'white squirrel, butterfly, bubbles, crystals, crystal mountain, cloud faces, long tail, furry animal, cute animal, leafy, water, calm water, flying, serpent, snake skin, sparkle, drops'
  },
  {
    url: base_url + "eagerness.png",
    title: "Eagerness",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Eagerness has his eye on a treat, and is in a hurry to get a taste of it.",
    category: "fine art",
    subcategory: "Feels Monsters",
    keywords: base_keywords + "monster, feels monster, emotional, eager, wanting, longing, craving, drive, driving force, excitement, tentacles, eyeball, long tongue, long tail, stripes, pink and green"
  },
  {
    url: base_url + "stubbornResentment.png",
    title: "Stubborn Resentment",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "He has had just about enough.  Careful you don't push him too far, as he's liable to lash out.",
    category: "fine art",
    subcategory: "Feels Monsters",
    keywords: base_keywords + "monster, underwater, cavern, cave, stubborn, resentment, amusing, fishy, pearlescent, unhappy, bitter, hurt, grumpy, rocks, tunnel, wrinkles"
  },
  {
    url: base_url + "bliss.png",
    title: "Bliss",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "As a jellyfish, Bliss has no weight, and no resistance to the changing currents of the world. He enjoys every ripple to the fullest extent.",
    category: "fine art",
    subcategory: "Feels Monsters",
    keywords: base_keywords + "monster, jellyfish, bliss, happiness, higher realms, joy, comfort, go with the flow, enjoyment, weightlessness, smiling, free, nirvana, heavenly"
  },
    //All the Feels
  {
    url: base_url + "gratitude.jpg",
    title: "Gratitude",
    subtitle: "24x24 UV Acrylic on canvas",
    description: "Accepting the gift of light, and giving gratitude in return.",
    category: "fine art",
    subcategory: "All the Feels",
    keywords: base_keywords + "gratitude, appreciation, morning sun, gift of light, life, grateful, thank you, arise, gift, water, growth, becoming, being, existence"
  },
  {
    url: base_url + "mischeif.png",
    title: "Mischief",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Did you see snakes in her hair?  Look again.  Mischief likes to play harmless tricks.  She is the spirit of Nature in spring, playful and fun.",
    category: "fine art",
    subcategory: "All the Feels",
    keywords: base_keywords + "mischeif, life, diversity, games, pranks, camoflage, flowers, earth goddess, gaia, spring, hope, enjoyment, festival, smiles, friendliness, vines, plants, hair, medussa"
  },
  {
    url: base_url + "maskedFear.png",
    title: "Masked Fear",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Afraid to come out of the dark, Fear holds out a scary mask to frighten away whatever might be waiting out there.",
    category: "fine art",
    subcategory: "All the Feels",
    keywords: base_keywords + "masks, hiding, fear, anxiety, anxious, dread, expectation, monsters, imagining, rats, insects, cracks, caverns, darkness, defense, defense mechanism, false face, trickery, monster mask, lizard, reptile, terror"
  },
  {
    url: base_url + "crackingUnderThePressure.png",
    title: "Cracking Under the Pressure",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "Intense pressure and stress mean that you've outgrown your shell - when it cracks, you are free to grow a new one.  Check out Twerski on stress for a neat talk.",
    category: "fine art",
    subcategory: "All the Feels",
    keywords: base_keywords + "crystal, cracked, pressure, anger, rage, breaking, growth, transformation, seething, fractured, reflection, crystals, bubbles, perspectives, shards, metatrons cube, sacred geometry, darkness, light"
  },
  {
    url: base_url + "monsterball.jpg",
    title: "Monsterball",
    subtitle: "12x12 UV Acrylic on canvas",
    description: "Monsterball is everyone you meet who is putting up a false front.  You can't tell what their motivations are, so interacting with them is like trying to navigate a dark labyrinth, always wondering if it's even worth the trouble.  I mean, if they can't ever be honest, is knowing them more trouble than it's worth?",
    category: "fine art",
    subcategory: "All the Feels",
    keywords: base_keywords + "monster, maze, headgames, tricks, lies, deceipt, deception, motivations, alterior motives, untrue, distrust, loss of faith, lack of purpose, mean, dangerous, stranger danger, bricks, hidden depths, unknown places, lost, loss of direction, navigation"
  },
  {
    url: base_url + "shpongle.png",
    title: "Dancing With the Universe AKA Shpongle: Codex 6",
    subtitle: "18x18 UV Acrylic on canvas",
    description: "You are the Universe enjoying a dance through one timeline from one perspective, and the Universe is watching your dance, and everyone else's, experiencing itself in every way",
    category: "fine art",
    subcategory: "All the Feels",
    keywords: base_keywords + "shpongle, psytrance, goa, codex6, codex 6, album art, cover art, universe, watching itself, self observation, meta, self referencing, feather, feather pen, dancing, clay, clay bodies, veiny, space, stars, forever, earth, life, path of enlightenment, from the earth, logos, the word"
  },
  {
    url: base_url + "starBird.jpg",
    title: "Star Bird",
    subtitle: "12x12 UV Acrylic on canvas",
    description: "Shooting through space, Star Bird is just enjoying the journey for what it is and sharing that enjoyment freely",
    category: "fine art",
    subcategory: "Sacred Birds",
    keywords: base_keywords + "bird, star, crystal, shard, heart, soaring, enjoyment, life, space, giving love, enjoying love, flight, love of the universe"
  },
  {
    url: base_url + "loveBird.jpg",
    title: "Love Bird",
    subtitle: "12x12 UV Acrylic on canvas",
    description: "Real Love persists when passion cools, and wants nothing in return.",
    category: "fine art",
    subcategory: "Sacred Birds",
    keywords: base_keywords + "bird, moon, feeling love, heart, warm feelings, warm glow, receiving love, enjoying love, floating, love of the heart"
  }
]

ko.applyBindings(new ImageList(artImages)); // This makes Knockout get to work
