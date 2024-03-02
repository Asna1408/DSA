 //stack
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class StackLinkedList {
    constructor() {
      this.top = null;
    } 
    
  
    // Push operation to add an element to the top of the stack
    push(element) {
      let newNode = new Node(element);
      newNode.next = this.top;
      this.top = newNode;
    }
  
    // Pop operation to remove the top element from the stack
    pop() {
      
      let poppedNode = this.top;
      this.top = this.top.next;
  
      return poppedNode.data;
    }
  
    // Print the stack elements
    print() {
      let current = this.top;
      let stackElements = [];
      while (current) {
        stackElements.push(current.data);
        current = current.next;
      }
      console.log(stackElements.reverse().join(' '));
    }
  }
  
  // Example usage:
  let stack = new StackLinkedList();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Stack after push operations:");
  stack.print();
  
  let poppedElement = stack.pop();
  console.log("Popped element:", poppedElement);
  
  console.log("Stack after pop operation:");
  stack.print();




  //to return the longest substring fromm string
  function longestRepeatingSubstring(s) {
    const n = s.length;
    let longestSubstring = "";
    
    for (let i = 0; i < n; i++) {
        let currentSubstring = "";
        let stack = [];
        
        for (let j = i; j < n; j++) {
            if (stack.length === 0 || stack[stack.length - 1] === s[j]) {
                stack.push(s[j]);
                currentSubstring += s[j];
            } else {
                // Empty the stack for the new character
                stack = []; 
                stack.push(s[j]);
                currentSubstring = s[j];
            }

            // Update the longest substring if needed
            if (currentSubstring.length > longestSubstring.length) {
                longestSubstring = currentSubstring;
            }
        }
    }

    return longestSubstring;
}

// Example usage
const inputString1 = "aajgjarrrrrrrrrrrrrrdfaaabbbbbbbbbbbbfrddddddddddddddddddddddddaaaaaaa";
const result1 = longestRepeatingSubstring(inputString1);
console.log(result1);



// to delete the middle elemnt using stack
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }


    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

function reverseStack(stack) {
  const auxiliaryStack = new Stack();

  while (!stack.isEmpty()) {
    auxiliaryStack.push(stack.pop());
  }
  return auxiliaryStack
}

function deleteMiddleElement(stack) {
    const tempStack = new Stack();
    const stackSize = stack.size();
    const middleIndex = Math.floor(stackSize / 2);

    for (let i = 0; i < middleIndex; i++) {
        tempStack.push(stack.pop());
    }

    // Skip the middle element
    const deleteMiddleElement= stack.pop();
    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
    return deleteMiddleElement
}

// Example usage
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5); 


console.log(myStack.items[Math.floor(myStack.items.length/2)])

console.log("Original Stack:", myStack.items);

let delt=deleteMiddleElement(myStack);
console.log(delt)
console.log("Stack after deleting middle element:", myStack.items);

console.log("Original Stack:", myStack.items);
  let newstac=reverseStack(myStack);
  console.log("Reversed Stack:",newstac.items);
  

//to get second last element 
function getSecondLastElement(stack) {
    if (stack.length >= 2) {
        return stack[stack.length - 2];
    } else {
        return undefined;
    }
}

// Example usage
const Stackarr = [1, 3, 4, 2, 5];
const secondLastElement = getSecondLastElement(Stackarr);
console.log("Second-to-last element:", secondLastElement);


//to insert the power of 2
function poweroftwo(){
    const tempStack = new Stack();
    for(i=0;i<7;i++) {
        tempStack.push(2**i)
    }
    
    return tempStack
}

console.log("poweroftwo",poweroftwo().items)



//move the mioddle elemento another stack
class Stack1 {
    constructor() {
      this.items = [];
    }
  
    // Push element onto the stack
    push(element) {
      this.items.push(element);
    }
  
    // Pop element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the middle element of the stack
    getMiddle() {
      const middleIndex = Math.floor(this.items.length / 2);
      return this.items[middleIndex];
    }
  
    // Delete the middle element from the stack
    deleteMiddle() {
      const middleIndex = Math.floor(this.items.length / 2);
      this.items.splice(middleIndex, 1);
    }
  }
  
  function moveMiddleToAnotherStack(stack1, stack2) {
    const middleElement = stack1.getMiddle();
    const tempStack = new Stack1();
  
    // Move elements from stack1 to tempStack until the middle element is encountered
    while (!stack1.isEmpty() && stack1.getMiddle() !== middleElement) {
    tempStack.push(stack1.pop());
    }
  
    // Skip the middle element
    stack1.pop();
  
    // Move elements back to stack1 from tempStack
    while (!tempStack.isEmpty()) {
      stack1.push(tempStack.pop());
    }
  
    // Push the middle element to stack2
    stack2.push(middleElement);
  }
  
  // Example Usage
  const stack1 = new Stack1();
  const stack2 = new Stack1();
  
  // Push elements onto stack1
  stack1.push(1);
  stack1.push(2);
  stack1.push(3);
  stack1.push(4);
  stack1.push(5);
  
  console.log("Original Stack 1:", stack1.items);
  
  // Move the middle element to stack2 
  moveMiddleToAnotherStack(stack1, stack2);
  console.log("Stack 1 after moving middle element:", stack1.items);
  console.log("Stack 2 after moving middle element:", stack2.items);
  


  //to find the missing number from array
  function findMissingNumber(nums, n) {
    // Calculate the expected sum of numbers in the range [0, n]
    const expectedSum = (n * (n + 1)) / 2;
  
    // Calculate the actual sum of the numbers in the array
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
  
    // The missing number is the difference between the expected and actual sums
    const missingNumber = expectedSum - actualSum;
  
    return missingNumber;
  }
  
  // Example usage:
  const nums = [3, 0, 1];
  const n = 3;
  
  const missingNumber = findMissingNumber(nums, n);
  console.log("The missing number is:", missingNumber);

  
  