/*** Object Constructors ***/
function Elephant(name, age) {
  this.name = name;
  this.age = age;
  this.image = "elephant.png";
  this.image_alt = "A black and white elephant";
}

function Sheep(name, age) {
  this.name = name;
  this.age = age;
  this.image = "sheep.png"
  this.image_alt = "A black and white sheep";
}

function Zebra(name, age) {
  this.name = name;
  this.age = age;
  this.image = "zebra.png";
  this.image_alt = "A black and white zebra";
}

let animals = [new Elephant(), new Sheep(), new Zebra()];
let names = ["Joe", "Steve", "Barbera", "Jennifer", "Smith", "Beth", "Fred", "Ruby", "Greg"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
  let randomIdx = getRandomIndex(animals.length);
  let randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Elephant)
  {
    return new Elephant(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Sheep)
  {
    return new Sheep(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Zebra)
  {
    return new Zebra(generateRandomName(), generateRandomAge());
  }
}

function generateRandomName() {
  let randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

function generateRandomAge() {
  return getRandomIndex(5);
}

function onLoad() {

  let animal = generateRandomAnimal();
  console.log(animal)
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);

}