class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  bank = 'Chase';

  get() {

  }

}


const sang = new Person('sang', 'suh');
console.log(sang.bank);
