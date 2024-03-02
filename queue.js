//quene
class Nodeque { 
    
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.front = null; 
      this.rear = null;  
    }
  

    enqueue(data) {
      const newNode = new Nodeque(data);
  
      if (!this.front) {
      
        this.front = newNode;
        this.rear = newNode;
      } else {

        this.rear.next = newNode;
        this.rear = newNode;
      }
    }
  

    dequeue() {
      if (!this.front) {
      
        return null;
      }
  
      const dequeuedData = this.front.data;
  
      if (this.front === this.rear) {
   
        this.front = null;
        this.rear = null;
      } else {
       
        this.front = this.front.next;
      }
      return dequeuedData;
    }
  

    isEmpty() {
      return this.front === null;
    }
  }

  const myQueue = new Queue();
  
  myQueue.enqueue("element1");
  myQueue.enqueue("element2");
  myQueue.enqueue("element3");
  
  console.log(myQueue.dequeue()); 
  console.log(myQueue.dequeue()); 
  console.log(myQueue.isEmpty()); 
  console.log(myQueue.dequeue()); 
  console.log(myQueue.isEmpty()); 
  
 