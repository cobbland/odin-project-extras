import * as myModules from "./modules.js";

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    callPet() {
        console.log(`Come here, you little thing! Here, ${this.name}!`)
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        // this.name = name;
        this.breed = breed;
        this.species = 'dog';
    }

    callDog() {
        super.callPet();
        console.log(`Come here ${this.species} who's name is ${this.name} and whose breed is ${this.breed}`);
    }
}

const salutationFunctions = myModules.Salutations();

console.log(myModules.apple);
console.log(salutationFunctions.greeting());
console.log(salutationFunctions.farewellString);