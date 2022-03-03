// Reference types

// objects are what's known as reference types in javascript

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

// what would the equality check say?
console.log(object1 === object2);

/* true, since object2 is a copy of object1 and it points
 to the same location of the memory. */

// what would this equality check say then?
console.log(object1 === object3);

/* false, since the location of the memory is different
 even though the values of the objects are exactly the same */

object1.value = 15;
console.log(object2.value);

/*  
    Reference types are created by the programmer (such as arrays and objects). 
    Primitive types already exist in Javascript and can always refer to the same location of the memory
*/

