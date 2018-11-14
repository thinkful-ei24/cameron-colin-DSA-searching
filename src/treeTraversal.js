const BinarySearchTree = require('./BST');

const bst = new BinarySearchTree;
const insertItems = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
insertItems.forEach(item => bst.insert(item));

function preOrder(bst){
  // node first
  // left next
  // right after
  console.log(bst.key);
  if(bst.left){
    preOrder(bst.left);
  }
  if(bst.right){
    preOrder(bst.right);
  }
}

// preOrder(bst);

function inOrder(bst){
  if(bst.left){
    inOrder(bst.left);
  }
  console.log(bst.key);
  if(bst.right){
    inOrder(bst.right);
  }
}

// inOrder(bst);

function postOrder(bst){
  if(bst.left){
    postOrder(bst.left);
  }if(bst.right){
    postOrder(bst.right);
  }
  console.log(bst.key);
}

postOrder(bst);