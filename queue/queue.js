class Queue {
  constructor(data) {
    this.value = [];
    this.value.push(data);
  }

  add(value) {
    console.log(this.value);
    this.value.unshift(value);
    return this.value;
  }

  remove() {
    this.value.pop();
    return this.value;
  }
}

const queue = new Queue(0);
queue.add(2);
queue.add(3);
queue.add(4);
queue.add(4);
console.log(queue);
queue.remove();
console.log(queue);
