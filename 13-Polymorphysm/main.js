"use strict"

/**
 * autor: afelipelc
 * date: 22/09/2018 for IT 7th course
 */


 // In JS polymorphism is a bit more difficult to see the effects of polymorphism because the more classical types of polymorphism are more evident in statically-typed systems.
 // Why: Polymorphism foster many good attributes in software, among other things it fosters modularity & reuse-ability & make the type system more flexible & elastic.
 
 // Poly= many, Morphism=form
 // info taked from: https://blog.knoldus.com/object-oriented-javascript-polymorphism-with-examples/

// super class Person
class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  // we give Person the ability to share their information
  getInfo() {
    return `My name is ${this.name}, i am ${this.age} years old`;
  }
}

// now we wish to have a subclass of Person
class Programmer extends Person{
  constructor(name, age, favoriteLanguages) {
    super(name, age);
    this.favoriteLanguages = favoriteLanguages;
  }

  getFavoriteLanguages() {
    return `My favorite programming languages are: ${this.favoriteLanguages}`;
  }

  // override getInfo() as inherited function
  getInfo(){
    return `Hello, i am a programmer, name is ${this.name} and i am ${this.age} years old`;
  }
}


// create a Person
const person1 = new Person('Alex', '20');
console.log(person1);
console.log(person1.getInfo());
//console.log(person1.getFavoriteLanguages()); // ability doesn't exist in person1
console.log('\n\n');
// create a Programmer
const programmer1 = new Programmer('John', 22, ['JS', 'C#', 'Ruby']);
console.log(programmer1);
console.log(programmer1.getInfo());
console.log(programmer1.getFavoriteLanguages());



