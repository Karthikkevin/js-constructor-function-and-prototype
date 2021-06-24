// Import stylesheets
import './style.css';

// Write Javascript code!

//Creating Class and Executing the class by Creating Instance.
class Class_A {
  name = 'wert';
  constructor(age) {
    this.age = age;
  }
  greet() {
    console.log(`Your name is ${this.name} and age is ${this.age}`);
  }
}
const obj_A = new Class_A(4);
obj_A.greet();

//Constructor Function

function ConstructorFunction_A(age) {
  this.name = 'wert';
  this.age = age;
  this.greet = function() {
    console.log(
      `Constructor Function: Your name is ${this.name} and age is ${this.age}`
    );

    console.log(this);
  };
}
const Conobj_A = new ConstructorFunction_A(4);
Conobj_A.greet();
