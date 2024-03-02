
//bubble sort
function bubblesort(arr){
    let swapped;
    do{
        swapped = false
        for(let i =0; i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i]= arr[i+1]
                arr[i+1]= temp
                swapped =true
            }
        }
    }while(swapped)
}

const arr =[ 4,-5,8,3,7,2]
 bubblesort(arr)
console.log("sorted array : ",arr)


//insertsort
function insertsort(arr){
   for(let i =1;i<arr.length;i++){
    let numberinsert = arr[i]
    let j = i-1
    while(j>=0 && arr[j]>numberinsert){
        arr[j+1]=arr[j]
        j = j-1
    }
    arr[j+1]= numberinsert
   }
}

const arr1 = [8,20,-12,4,-6]
insertsort(arr1)
console.log(arr1)


//selection sort
function selectionsort(array){
    for(let i =0;i<array.length;i++){
        let minIndex = i
        for(let j=i+1;j<array.length;j++){
            if(array[j]<array[minIndex]){
                minIndex = j
            }
        }
      
        const temp = array[i]
        array[i] =array[minIndex]
        array[minIndex] = temp;
    

}
    return array
}

const arr2 =[64, 25, 12, 22, 11]
const output = selectionsort(arr2)
console.log(output)


//quicksort
  
function quicksort(arr){
    if(arr.length<2){
        return arr
    }

    let pivot =arr[arr.length-1]
    let left = []
    let right = []
    for(let i =0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)]
}

const quickarr = [8,20,-2,4,-6]
console.log(quicksort(quickarr))


//mergesort
function mergesort(arr){
   if(arr.length<2){
    return arr
   }

   const mid = arr.length/2 
   const leftarr = arr.slice(0,mid)
   const rightarr = arr.slice(mid)
   return merge(mergesort(leftarr),mergesort(rightarr))
}

function merge(leftarr,rightarr){
    const sortarr=[];
    while(leftarr.length && rightarr.length){
        if(leftarr[0]<= rightarr[0]){
            sortarr.push(leftarr.shift())
        }else{
            sortarr.push(rightarr.shift());
        }
    }
    return[...sortarr,...leftarr,...rightarr]
}

const arr5 = [8,20,-2,4,-5]
console.log(mergesort(arr5))
     




      
