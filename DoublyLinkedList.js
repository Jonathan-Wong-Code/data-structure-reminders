class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length -= 1;

    return temp;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    const temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      temp.next = null;
      this.head.prev = null;
    }

    this.length -= 1;
    return temp;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }

    if (index === this.length - 1) {
      return this.tail;
    }

    if (index === 0) {
      return this.head;
    }

    if (index > Math.floor(this.length / 2)) {
      let counter = this.length - 1;
      let current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }

      return current;
    } else {
      let counter = 0;
      let current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  set(val, index) {
    const foundNode = this.get(index);
    if (!foundNode) {
      return false;
    }
    foundNode.val = val;

    return true;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      return !!this.unshift(val);
    }

    if (index === this.length) {
      return !!this.push(val);
    }
    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const next = prev.next;
    newNode.prev = prev;
    newNode.next = next;
    prev.next = newNode;
    next.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(index);
    }

    if (index === this.length - 1) this.pop();
    const removedNode = this.get(index);
    const prev = removedNode.prev;
    const next = removedNode.next;
    removedNode.next = null;
    removedNode.prev = null;
    prev.next = next;
    next.prev = prev;

    this.length -= 1;
    return removedNode;
  }
}

const list = new DoublyLinkedList();

list.push("1");
list.push("2");
list.push("3");
list.push("4");
console.log(list.remove(1));
console.log(list);
