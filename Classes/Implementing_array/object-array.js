class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const oldItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return oldItem;
  }

  shiftItems(index) {
    for (let i = index; i <= this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  shift() {
    const oldItem = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return oldItem;
  }

  unshift(item) {
    let temp = this.data[0];
    for (let i = 0; i <= this.length; i++) {
      if (i === 0) {
        this.data[i] = item;
      } else {
        let newTemp = this.data[i];
        this.data[i] = temp;
        temp = newTemp;
      }
    }
    this.length++;
  }
}

const newArr = new MyArray();
console.log(newArr.push(10));
console.log(newArr.push(112));
console.log(newArr.push(212));
console.log(newArr.push(312));
console.log(newArr.push(412));

console.log(newArr.unshift(1));
// console.log(newArr.get(0));
// console.log(newArr.pop());
// console.log(newArr.shiftItems(2));
console.log(newArr);
// console.log(newArr.length);
