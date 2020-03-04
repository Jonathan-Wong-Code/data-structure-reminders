class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    let hasNode = true;
    while (hasNode) {
      if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          hasNode = false;
        } else {
          currentNode = currentNode.right;
        }
      }

      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          hasNode = false;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
    return this;
  }

  contains(val) {
    if (!this.root) return undefined;
    if (this.root.value === val) return true;
    let currentNode = this.root;
    let hasNode;

    while (true) {
      if (currentNode.value === val) {
        hasNode = true;
        break;
      }

      if (val > currentNode.value) {
        if (!currentNode.right) {
          hasNode = false;
          return false;
        }
        currentNode = currentNode.right;
      }

      if (val < currentNode.value) {
        if (!currentNode.left) {
          hasNode = false;
          return false;
        }
        currentNode = currentNode.left;
      }
    }
    return hasNode;
  }

  BFS() {
    if (!this.root) return null;
    const queue = [this.root];
    const visited = [];
    let currentNode;
    while (queue.length !== 0) {
      currentNode = queue.shift();
      visited.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return visited;
  }

  DFSPre() {
    const values = [];

    const traverse = node => {
      values.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return values;
  }

  DFSPost() {
    const values = [];

    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      values.push(node.value);
    };

    traverse(this.root);
    return values;
  }

  DFSInOrder() {
    const values = [];

    const traverse = node => {
      if (node.left) traverse(node.left);
      values.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return values;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);

tree.insert(8);

tree.insert(20);

console.log(tree.DFSInOrder());
