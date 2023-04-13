//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get getSpecies(){
		return this.species;
	}

	makeSound(){
		console.log("Barking");
	}
}

class Dog extends Animal {
	bark(){
		super();
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		super();
		console.log("purr");
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
