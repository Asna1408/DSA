 
 class Node{
 constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

prepend(value){
const node = new Node(value)
if(!this.head){
this.head = node
return;
}
node.next = this.head
this.head = node
}

append(value){
    const node = new Node(value)
    if(!this.head){
        this.head = node;
        return;
    }
    let current = this.head
    while(current.next){
        current = current.next;

    }
    current.next = node
}

Insert(value,index){
    if(index == 0){
        node.next = this.head
        this.head = node
    }
    if(index < 0){
        console.log("not found")
    }else{
        let node = new Node(value)
        let current = this.head
        for(let i=0;i<index-1;i++){
            current = current.next
        }

        node.next = current.next
        current.next = node
    }
}

delete(index){
if(index < 0){
    return null;
}

let removenode ;
if(index === 0){
    
     removenode = this.head
    this.head = this.head.next
}

else{
    let current = this.head
    for(let i=0;i<index-1;i++){
        current = current.next
    }

    removenode = current.next
    current.next = removenode.next
}

return removenode.value
}


removevalue(value){
    if(!this.head){
        return
    }
    if(this.head.value === value){
        this.head = this.head.next
        return
    }
        let prev = this.head
        while(prev.next ){
            if(prev.next.value === value)
  {
    prev.next = prev.next.next
    return
  }      
  prev = prev.next
  
        
    }
}
search(value){
    let i = 0;
    let current = this.head
    while (current){
       if( current.value === value){
        return i 
    }
    current = current.next;
    i++
    }
    return -1;
}

//reverse the linkedlist
reverse(){
    let current = this.head
    let prev = null
   
    while(current){
        let Next = current.next
        current.next = prev
        prev = current
        current = Next
    }
    this.head = prev
}

//to find middle element 
middleelement(){
    if(!this.head){
        return null
    }
    let slow = this.head
    let fast = this.head
    while(fast&&fast.next){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

//to remove duplicate elemnets
removeduplicate(){
    let current = this.head
    while(current){
        let runner = current
        while(runner.next){
            if(runner.next.value === current.value){
                  runner.next = runner.next.next 
            }else{
                runner = runner.next
            }
        }
        current = current.next
    }
}


print(){
    let current = this.head
    while(current){
        console.log(current.value)
        current = current.next
    }
}

}




const List = new LinkedList
List.prepend(4)
List.append(5)
List.Insert(3,1)
List.prepend(2)
List.prepend(1)
List.prepend(5)
List.append(8)
List.print()    //[8,5,3,4,2,1,5]


List.delete(2)  //index
List.removevalue(3)
console.log("After deletion")
List.print()     //[8,5,4,1,5]


console.log("reversed elements are")
List.reverse()
List.print()     //[5,1,2,5,8]


console.log("searched element fount in",List.search(1))  //3 (index)
console.log(List.middleelement().value)   //middleelement:4

List.removeduplicate()
List.print() //[8,5,4,1]



