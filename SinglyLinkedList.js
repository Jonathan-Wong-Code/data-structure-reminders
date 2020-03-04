// piece of data -val
//reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adds value to end
  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Set tail.next to the new node..then re-assign tail to the neew node.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  // removes node from end;
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    // Traverse list until current.next gives us the last element.
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // removes node from beginning
  shift() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    this.head = this.head.next;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  // adds a node to beginning
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // newNode.next = this.head
      // this.head = newNode
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    this.length++;
    return this;
  }

  // gets a node at an index
  get(index) {
    if (index <= 0) {
      return null;
    }

    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }
  // sets a nodes value
  set(value, index) {
    const node = this.get(index);
    if (!node) {
      return false;
    }
    node.val = value;
    return true;
  }
  // start with node at index - 1 the PRE node.
  insert(value, index) {
    const newNode = new Node(value);
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === this.length) {
      return !!this.push(value);
    }

    if (index === 0) {
      return !!this.unshift(value);
    }

    const prev = this.get(index - 1);
    const next = prev.next;
    prev.next = newNode;
    newNode.next = next;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const prev = this.get(index - 1);
    const temp = prev.next;
    const next = prev.next.next;
    prev.next = next;
    this.length -= 1;
    return temp;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();

list.push({ a: "Hello" });
list.push({ b: "Goodbye" });
list.push({ c: "Kinda" });
list.push({ d: "fwefw" });
list.push({ e: "fwefKf" });
list.remove(4);

// list.unshift({ d: "Comes before" });
console.log(list);
