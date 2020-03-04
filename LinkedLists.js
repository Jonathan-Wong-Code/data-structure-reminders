class LinkedList {
  constructor(value) {
    this._head = value && { value, next: null };
    this._tail = this._head;
    this._length = value ? 1 : 0;
  }

  // Push;
  insert(value) {
    // update head and tail as needed
    const newNode = { value, next: null };

    if (!this._head) {
      this._head = newNode;
      this._tail = this._head;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }

    return this;
  }

  remove() {
    if (!this._head) return undefined;
    if (this._length === 1) {
      this._head = null;
      this._tail = null;
    }

    let current = this._head;
    let prev;

    while (current.next) {
      prev = current;
      current = current.next;
    }

    let temp = this._tail;
    prev.next = null;
    this._tail = prev;
    return temp;
  }

  contains(value) {
    if (!this._head) return undefined;
    if (this._length === 1) {
      if (value === this._head) return true;
      else return false;
    }

    let current = this._head;
    let found = false;
    while (current) {
      if (current.value === value) {
        found = true;
        break;
      }
      current = current.next;
    }

    return found;
  }
}

const myList = new LinkedList();

myList.insert(5);
myList.insert(6);
myList.insert(7);
myList.insert(8);
myList.insert(9);

console.log(myList.contains(2));
