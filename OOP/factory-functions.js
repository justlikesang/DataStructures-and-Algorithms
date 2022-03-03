function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(`My full name is ${this.firstName} ${this.lastName}`);
    },
  };
}

const sang = createPerson('sang', 'suh');
console.log(sang.fullName());



function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.fullName = function () {
  //   console.log(`My full name is ${this.firstName} ${this.lastName}`);
  // }
}

Person.prototype.fullName = function () {
  console.log(`My full name is ${this.firstName} ${this.lastName}`);
};

Person.prototype.hairColor = 'Brown';

const michael = new Person('Michael', 'Shi');
console.log(michael.fullName());
console.log(michael.hairColor);

console.log(JSON.stringify([1,2,3,4]));
console.log(123);
// __proto__ vs prototype
