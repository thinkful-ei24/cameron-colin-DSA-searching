class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.valule = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    if (this.key === key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      return 'Key does not exist';
    }
  }

  remove(key) {
    if (this.key === key) {
      if (this.left && this.right) {
        const newNode = this.right._findMin();
        this.key = newNode.key;
        this.value = newNode.value;
        newNode.remove(newNode.key);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      return "The key does not exist";
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    } else {
      return this.left._findMin();
    }
  }

  _findMax() {
    if (!this.right) {
      return this;
    } else {
      return this.right._findMax();
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      } else if (this === this.parent.right) {
        this.parent.right = node;
      }
      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }
}

module.exports = BinarySearchTree;