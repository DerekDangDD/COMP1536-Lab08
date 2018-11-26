let pokemonData = {
  "Pokemon" : [
    {name: "Bulbasaur",
     Generation: 1,
     ID : 1,
     Regional_Numbers : {
        Central : "080",
        Johto : "231",
        Kanto : "001"
    },
      Type : "Grass",
      Description : "Bulbasaur is a small, quadruped Pokémon that has turquoise skin with darker teal patches. It has red eyes with white pupils and scleras. It also has pointed, ear-like structures on top of its head. Its snout is short and blunt, and it has a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On its back is a green plant bulb, which is grown from a seed planted there at birth. The bulb provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within.",
      Image : {
        "picture1" : "https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
        "picture2" : "url2",
        "picture3" : "url3"}
    },
    {name: "Charmander",
     Generation : 1,
     ID : "004",
     Regional_Numbers : 
        {Central : "083",
        Johto : "234",
        Kanto : "004"},
      Type : "Fire",
      Description : "Charmander is a bipedal, reptilian Pokémon with a primarily orange body. Its underside from the chest down and soles are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. Charmander has blue eyes. Its arms and legs are short with four fingers and three clawed toes. A fire burns at the tip of this Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged. It is said that Charmander dies if its flame goes out. However, if the Pokémon is healthy, the flame will continue to burn even if it gets a bit wet and is said to steam in the rain",
      Image : {
        "picture1" : "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
        "picture2" : "url2",
        "picture3" : "url3"}
      
    },
    {name: "Squirtle",
     Generation : 1,
     ID : "007",
     Regional_Numbers : 
        {Central : "086",
        Johto : "237",
        Kanto : "007"},
      Type : "Water",
      Description : "Squirtle is a small Pokémon that resembles a light blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large eyes and a slightly hooked upper lip. Each of its hands and feet has three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves.",
      Image : {
        "picture1" : "https://cdn.bulbagarden.net/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png",
        "picture2" : "url2",
        "picture3" : "url3"}
      
    }
    ]
}


module.exports = {
  getJSON: function () {
      console.log("called: getJSON");
      // Note: this could be from a DB, for now it's just hard-coded
      return pokemonData;
  }
};




var someOtherFunction = function () {
    console.log("Can't touch this!");
}