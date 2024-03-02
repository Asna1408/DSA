class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class Doublylinked{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode;
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
    }

    prepend(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
             this.head =newNode
        }
    }

    reverse(){
        let current = this.tail
        while(current){
            console.log(current.value)
            current = current.prev
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

let newList = new Doublylinked()
newList.append(5)
newList.append(6)
newList.append(10)
newList.append(20)
newList.append(30)
newList.prepend(40)
newList.prepend(50)
newList.print()

newList.reverse()
