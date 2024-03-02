class Heap{
    constructor(){
        this.heap =[]
    }

    getParent(index){
        return Math.floor((index-1)/2)
    }
    getleftchild(index){
        return (2*index+1)
    }
    getrightchild(index){
        return (2*index+2)
    }
    swap(index1,index2){
        const temp = this.heap[index1]
        this.heap[index1]=this.heap[index2]
        this.heap[index2] = temp
    }

    heapfyUp(index){
        const parentIndex = this.getParent(index)
        if(parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]){
            this.swap(index,parentIndex)
            this.heapfyUp(parentIndex)
        }
    }

    heapfyDown(index){
        const leftIndex = this.getleftchild(index)
        const rightIndex = this.getrightchild(index)
        let maxIndex = index
       
        if(leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[maxIndex]){
            maxIndex =leftIndex
        }

        if(rightIndex <this.heap.length && this.heap[rightIndex] > this.heap[maxIndex]){
            maxIndex = rightIndex
        } 
        if(maxIndex !== index){
            this.swap(index,maxIndex)
            this.heapfyDown(maxIndex)
        }
    }

    insert(value){
        this.heap.push(value)
        this.heapfyUp(this.heap.length-1)
    }


remove(){
 if(this.heap.length === 0){
    return null
 }   
 if(this.heap.length === 1){
    return this.heap.pop()
 }

 const max = this.heap[0]
this.heap[0] = this.heap.pop()
this.heapfyDown(0)
return max
}

buildheapfromarray(array){
    this.heap = array;
    const firstheap =Math.floor((array.length -2)/2)
    for(let i=firstheap;i>=0;i--){
        this.heapfyDown(i)
    }
}

heapsort(){
    let sortedArray =[]
    while(this.heap.length>0){
        sortedArray.push(this.remove())
    }
    return sortedArray
}

}


const maxHeap = new Heap();

const arrayToBuildHeap = [15, 58, 10, 30, 5];
maxHeap.buildheapfromarray(arrayToBuildHeap);
console.log(maxHeap.heap); 

maxHeap.insert(18)
maxHeap.insert(28)
console.log(maxHeap.heap); 

console.log(maxHeap.remove());
console.log(maxHeap.heapsort());




  