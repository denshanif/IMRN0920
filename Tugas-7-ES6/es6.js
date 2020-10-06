// Soal No. 1

const golden = goldenFunction = () => {
    console.log("this is golden!!")
}

golden()

// Break
console.log(" ")

// Soal No. 2

const newFunction = literal = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(firstName + " " + lastName);
      return;
    },
  };
};

//Driver Code
newFunction("William", "Imoh").fullName(); 

// Break
console.log(" ")

// Soal No. 3

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const { firstName, lastName, destination, occupation, spell } = newObject;

// Driver code
console.log(firstName, lastName, destination, occupation)

// Break
console.log(" ")

// Soal No. 4

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)

// Break
console.log(" ")

// Soal No. 5

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`

// Driver Code
console.log(before)