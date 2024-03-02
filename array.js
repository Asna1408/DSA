
//insert an elemnt in array
function insert(arr){
arr.push(5)
return arr
}
let arr1 = [1,2,4,6,3]
let result = insert(arr1)     
console.log("the inserted array is :", result)


 // flattern 1d array to 2d array
function array(myArray){
var myNewArray3 = [];
for (var i = 0; i < myArray.length; ++i) {
  for (var j = 0; j < myArray[i].length; ++j)
    myNewArray3.push(myArray[i][j]);
}
return myNewArray3
}
let arr3 = [[1,5],[1,5,6],[1,2,3]]
let newarr = array(arr3)
console.log("The new array is :" ,newarr)


//to get the sum of 2 numbers from array
function sum(arr,target){
    for(let i =0;i<=arr.length-1;i++){
        for(let j=i+1;j<=arr.length-1;j++){
            if(arr[i]+arr[j]===target)
                return [arr[i],arr[j]]
        }
    }
}
let arr = [1,3,2,5,7]
let t= 10
let add = sum(arr,t)
console.log("the elements are : ",add) 

// to rearrange the same elemnt to the end of array
function order(array,target){
    for(let j=array.length-1;j>=0;j--){
        if(array[j]!==target){
            for(let i =0;i<j;i++){
                if(array[i]===target){
                    let temp = array[i]
                    array[i]=array[j]
                    array[j]=temp
                }
            }
        }
    }
    return array;
}
let arrayset = [1,4,2,4,8,6,4,9,7,4]
let target = 4
let newarray =  order(arrayset,target)
console.log(newarray)

//to remove duplicates
function duplicates(array){
    let uniquearray =[]
    for(let i=0;i<array.length;i++){ 
         
         let isduplicate = false;
        for(let j =0;j<uniquearray.length;j++){
            if(array[i]===uniquearray[j]){
                isduplicate = true
                break;
            }
        }
        if(!isduplicate){
        uniquearray.push(array[i])
        }
    }
    return uniquearray
}
let arrayset1 = [1,4,2,4,8,6,4,9,7,4]
let newarray1 =  duplicates(arrayset1)
console.log(newarray1)


// given an number to store in end of array
function swapToEnd(array, target) {
    for (let j = array.length - 1; j > 0; j--) {
        if (array[j] !== target) {
            for (let i = 0; i < j; i++) {
                if (array[i] === target) {
                    // Swap array[i] and array[j]
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
        }
    }
    return array;
}

let array1 = [6, 1, 6, 8, 10, 4, 15, 6, 3, 9, 6];
let target1 = 6;
let result1 = swapToEnd(array1, target1);

console.log(result1.join(', '));

