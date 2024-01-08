/*"They're putting ___ in the ___ to turn the friggin __ gay!"*/

let infections = ["chemicals", "spores", "bacteria", "a virus", "biohazards", "pharmaceuticals", "drugs", "fungus", "parasites", "poisons", "toxins", "weed", "carcinogens", "5g", "alpha waves", "microwaves", "stem cells", "rainbows"];

let infectedPlaces = ["water", "ground", "air", "clouds", "houses", "trees", "grass", "pipes", "ocean", "lake", "food", "plants", "atmosphere", "vaccines", "wind turbines"];

let infectedThings = ["frogs", "fish", "dolphins", "whales", "Russians", "Americans", "Chinese", "bees", "world", "government", "birds", "corporations", "wolves"];

console.log(infections[Math.floor(Math.random()*infections.length)])

document.getElementById("wisdom").addEventListener('click', alexJonesWiz);

function alexJonesWiz() {
    let infectionResult = infections[Math.floor(Math.random()*infections.length)];
    let placesResult = infectedPlaces[Math.floor(Math.random()*infectedPlaces.length)];
    let thingsResult = infectedThings[Math.floor(Math.random()*infectedThings.length)];

    document.getElementById("result").innerHTML = `They're putting ${infectionResult} in the ${placesResult} to turn the frigging ${thingsResult} gay!`;
}