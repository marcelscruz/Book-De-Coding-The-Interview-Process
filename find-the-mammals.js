// Given an array containing a list of animal objects, return a new array containing only the animals which are mammals.

const animals = [
  {
    type: "Dog",
    mammal: true,
  },
  {
    type: "Snake",
    mammal: false,
  },
  {
    type: "Cheetah",
    mammal: true,
  },
];

// const mammals = [];

// for (let animal of animals) {
//   animal.mammal && mammals.push(animal);
// }

const mammals = animals.filter(({ mammal }) => mammal);

console.log("mammals ->", mammals);
