// Stack with a linked list! Uses shift/unshift for push/pop

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size += 1;
    return this.size;
  }

  pop() {
    if (this.size === 0) return null;
    if (this.length === 1) {
      this.last = null;
    }
    const temp = this.first;
    this.first = this.first.next;
    temp.next = null;

    this.size -= 1;
    return temp;
  }

  peek() {
    if (this.size === 0) return null;
    return this.first;
  }
}

const myStack = new Stack();
myStack.push("first");
myStack.push("second");
myStack.push("third");
console.log(myStack.pop());
console.log(myStack);
