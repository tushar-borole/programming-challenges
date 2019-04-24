class Stack {
  constructor(data) {
    this.value = [];
    if (data) {
      this.value.push(data);
    }
  }

  add(data) {
    this.value.unshift(data);
  }

  remove() {
    this.value.shift();
  }
}

const stack1 = new Stack(1);
stack1.add(2);
stack1.add(3);
console.log(stack1);
stack1.remove();
console.log(stack1);
