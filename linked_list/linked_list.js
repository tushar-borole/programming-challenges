class Node {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    const new_node = new Node(value, this.head);
    this.head = new_node;
  }

  size() {
    let counterSize = 0;
    let node = this.head;
    while (node) {
      counterSize++;
      node = node.next;
    }
    return counterSize;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node) {
      if (node.next === null) {
        return node;
      } else {
        node = node.next;
      }
    }
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let node = this.head;
    while (node.next) {
      if (!node.next.next) {
        node.next = null;
        return;
      }
      node = node.next;
    }
  }
  insertLast(value) {
    const newNode = new Node(value);
    let node = this.head;
    while (node) {
      if (!node.next) {
        node.next = newNode;
        return;
      }
      node = node.next;
    }
  }
  getAt(n) {
    let node = this.head;
    let counter = 0;
    while (node) {
      if (counter === n) {
        return node;
      }
      node = node.next;
      counter++;
    }
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    const previous = this.getAt(index - 1);
    previous.next = previous.next.next;
  }

  insertAt(value, index) {
    const current = this.getAt(index);
    const new_node = new Node(value, current);
    const previous = this.getAt(index - 1);
    previous.next = new_node;
  }
}

const list = new LinkedList();
list.insertFirst("First");
list.insertLast("Second");
list.insertLast("Third");
list.insertLast("Fourth");
list.insertAt("First_Second", 1);
//list.removeAt(1);
console.log(list);
