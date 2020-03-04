class Queue {
  constructor() {
    this.storage = {};
    this.length = 0;
    this.headIndex = 0;
  }

  enquqeue(value) {
    if (value) {
      this.storage[this.length + this.headIndex] = value;
    }
    this.length += 1;
  }
  // removes the first item
  dequeue() {
    if (this.length === 0) return undefined;
    const removedValue = this.storage[this.headIndex];
    delete this.storage[this.headIndex];
    this.headIndex += 1;
    this.length -= 1;
    return removedValue;
  }
  // Returns oldest item now!
  peek() {
    return this.storage[this.headIndex];
  }
}

const myQueue = new Queue();
myQueue.enquqeue("First");
myQueue.enquqeue("First");
myQueue.enquqeue("First");
myQueue.enquqeue("Second");
myQueue.dequeue();
myQueue.dequeue();
myQueue.enquqeue("Second");

console.log(myQueue.peek());

console.log(myQueue);
