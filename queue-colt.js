class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

// Want to push to end and shift from beginning. Better performance

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size += 1;
    return this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }

    const temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.size -= 1;
    return this.size;
  }

  peek() {
    return this.first;
  }
}

const myQ = new Queue();

myQ.enqueue("first");
myQ.enqueue("second");
myQ.enqueue("third");
myQ.dequeue();
console.log(myQ.peek().value);

console.log(myQ);
