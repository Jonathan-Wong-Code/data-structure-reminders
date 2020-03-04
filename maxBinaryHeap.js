class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.values[parentIndex] < this.values[index] && index !== -1) {
      parentIndex = Math.floor((index - 1) / 2);
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;

      if (temp > this.values[0]) {
        this.values[index] = this.values[0];
        this.values[0] = temp;
      }
    }

    return true;
  }

  extractMax() {
    const oldRoot = this.values.shift();
    const newRoot = this.values.pop();
    this.values.unshift(newRoot);
    let parentIndex = 0;
    let leftValue, rightValue;

    while (true) {
      let left = parentIndex * 2 + 1;
      let right = parentIndex * 2 + 2;
      let swap = null;

      let parentValue = this.values[parentIndex];
      leftValue = this.values[left];
      rightValue = this.values[right];

      if (parentValue < leftValue && parentValue > rightValue) {
        this.swap(parentIndex, left);
        parentIndex = left;
        swap = true;
      } else if (parentValue > leftValue && parentValue < rightValue) {
        parentIndex = right;
        this.swap(parentIndex, right);
        swap = true;
      } else if (parentValue < leftValue && parentValue < rightValue) {
        if (leftValue > rightValue) {
          this.swap(parentIndex, left);
          parentIndex = left;
          swap = true;
        } else {
          this.swap(parentIndex, right);
          parentIndex = right;
          swap = true;
        }
      }

      if (swap === null) break;
    }

    return oldRoot;
  }

  swap(idx1, idx2) {
    let temp = this.values[idx1];
    this.values[idx1] = this.values[idx2];
    this.values[idx2] = temp;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(41);

heap.insert(39);
heap.insert(33);

heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
heap.insert(100);
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
