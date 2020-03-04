class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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
      if (newNode.value === currentNode.value) return undefined;
      // if the new node is greater go right
      if (newNode.value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          hasNode = false;
        } else {
          currentNode = currentNode.right;
        }
        //if new node is less go left!
      } else {
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

  find(value) {
    if (!this.root) return undefined;
    if (this.root.value === value) return true;

    let currentNode = this.root;

    while (true) {
      if (value === currentNode.value) return true;
      if (value > currentNode.value) {
        if (!currentNode.right) return false;
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) return false;
        currentNode = currentNode.left;
      }
    }
  }

  BFS() {
    if (!this.root) return null;
    const queue = [this.root];
    const visited = [];
    let newlyAdded;
    while (queue.length > 0) {
      newlyAdded = queue.shift();
      visited.push(newlyAdded);
      if (newlyAdded.left) queue.push(newlyAdded.left);
      if (newlyAdded.right) queue.push(newlyAdded.right);
    }

    return visited;
  }

  depthFirstPreOrder() {
    const allNodes = [];
    let current = this.root;

    const traverse = node => {
      allNodes.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);

    return allNodes;
  }

  depthFirstPostOrder() {
    const allNodes = [];
    let current = this.root;

    const traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      allNodes.push(node);
    };

    traverse(current);

    return allNodes;
  }

  depthFirstInOrder() {
    const allNodes = [];
    let current = this.root;

    const traverse = node => {
      if (node.left) traverse(node.left);
      allNodes.push(node);
      if (node.right) traverse(node.right);
    };

    traverse(current);

    return allNodes;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left.right = new Node(9);
tree.insert(6);
tree.insert(15);

tree.insert(3);
tree.insert(8);
tree.insert(20);
// tree.insert(13);
// tree.insert(14);

console.log(tree.depthFirstInOrder());
