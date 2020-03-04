/** Class representing a Stack. */
class Stack {
  constructor() {
    this._storage = {};
    this._index = 0;
  }
  /*
   * Adds a new value at the end of the stack
   * @param {*} value the value to push
   */
  push(value) {
    // Typechecking and check arguments
    if (value && typeof value !== "function") {
      this._storage[this._index] = value;
      this._index += 1;
    }
  }
  /*
   * Removes the value at the end of the stack and returns it
   * @return {*} the last and newest value in the stack
   */
  pop() {
    // What if it is empty?
    if (this._index === 0) {
      return undefined;
    }

    const removedValue = this._storage[this._index - 1];
    delete this._storage[this._index - 1];
    this._index -= 1;
    return removedValue;
  }
  /*
   * Returns the value at the end of the stack without removing it
   * @return {*} the last and newest value in the stack
   */
  peek() {
    if (this._index) return this._storage[this._index - 1];
    return undefined;
  }
}
const myStack = new Stack();
myStack.push("hello");
myStack.push("how");
myStack.push("are");
myStack.push("you");
myStack.pop();
console.log(myStack.peek());
