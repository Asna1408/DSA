  
  //binary search tree
  class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }

  class Binarytree{
    constructor(){
        this.root = null
    }

    //insert the node in tree
    Insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }else{
            this.InsertNode(this.root,newNode)
        }
    }

    InsertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.InsertNode(root.left,newNode)
            }
        }else{  
            if(root.right === null){
                root.right = newNode
            }else{
                this.InsertNode(root.right,newNode)
            }
        }   
    }


    //searching the value exist or not
    search(root,value){
        if(root===null){
            return false;
        }else{
            if(root.value === value){
                return true;
            }else if(value < root.value){
                   return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

   
    deleteNode(value) {
        this.root = this._delete(this.root, value);
      }
    
      _delete(root, value) {
        if (root === null) {
          return root;
        }
    
        if (value < root.value) {
          root.left = this._delete(root.left, value);
        } else if (value > root.value) {
          root.right = this._delete (root.right, value);
        } else {
          // Node with only one child or no child
          if(!root.left && !root.right){
            return null
          }
          if (root.left === null) {
            return root.right;
          } else if (root.right === null) {
            return root.left;
          }
    
          // Node with two children
          root.value = this._findMinValue(root.right);
          root.right = this._delete(root.right, root.value);
        }
    
        return root;
      }
    
      _findMinValue(node) {
        
        if (!node.left ) {
          return node.value;
          
        }else{
        return this._findMinValue(node.left);
      }
    }

    _findMaxValue(node){
      if(!node.right){
        return node.value;
      }else{
        return this._findMaxValue(node.right)
      }
    }

//too find the height of tree
    height(){
      return this._height(this.root);
    }
    
    _height(node) {
      if (node === null) {
        return -1; // Height of an empty tree is -1
      }
    
      const leftHeight = this._height(node.left);
      const rightHeight = this._height(node.right);
    
      return Math.max(leftHeight, rightHeight) + 1;
    }


  //to find secondLargest element in bst
  secondLargest(root){
    if(!root ||(!root.left && !root.right)){
      return null
    }

    let secondlarge = null
    let current = root;

    while(current){
      if(current.left && !current.right){
        secondlarge = Largest(current.left);
        break;
      }
      if(current.right && !current.right.left && !current.right.right){
        secondlarge = current.value
        break;
      }

      current = current.right
    }
    return secondlarge
  }
  
  Largest(node){
      let current = node
      while(current.right){
        current = current.right
      }
 return current.value
      
  }


  //validate BST
 isValidBST(node=this.root, min, max) {
    if (node === null) {
      return true; // An empty tree is a BST
    }
  
    // Check if the current node's value is within the valid range
    if ( node.value <= min ||  node.value >= max) {
      return false;
    }
  
    // Recursively check the left and right subtrees with updated min and max values
    return this.isValidBST(node.left, min, node.value) && this.isValidBST(node.right, node.value,max)
  
  }


  //check the given bst is identical
 identical(p,q){
   
    if(!p && !q){
      return true
    }
    if((!p &&q)||(p && !q)){
      return false
    }
    if(p.value !== q.value){
      return false
    }
  
    return identical(p.left,q.left)&&identical(p.right,q.right)
  
  }

    //print the values of tree
    printInOrder(node) {
        if (node !== null) {
            this.printInOrder(node.left);
            console.log(node.value);
            this.printInOrder(node.right);
        }
    }

    print() {
        this.printInOrder(this.root);
    }

  }



const bist = new Binarytree()
 bist.Insert(15)
 bist.Insert(10) 
 bist.Insert(5)
 bist.Insert(20)
 bist.Insert(13)
 bist.print()

 console.log(bist.search(bist.root,10))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
 console.log(bist.search(bist.root,12))
 console.log(bist.search(bist.root,15))
 console.log(bist.search(bist.root,20))

bist.deleteNode(5)
console.log("after deletion")
bist.print()

const treeHeight = bist.height();
console.log("Height of the BST:", treeHeight);

const root = new Node(10);
root.left = new Node(5); 
root.right = new Node(15);
root.left.left = new Node(2);
root.right.right = new Node(20);
const secondlarge = bist.secondLargest(root)
console.log(secondlarge)

// Validate the BST
const isBST =bist.isValidBST();
const isSame = bist.identical(bist.root,root)


console.log("Tree 1:");
bist.print();
console.log("\nTree 2:");
console.log(root);

console.log(isBST); //true
console.log(isSame) //false



 

 

  







