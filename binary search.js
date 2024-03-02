//binary serach
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

const array = [1, 2, 3, 4, 5, 6];
const target = 4;
const result = binarySearch(array, target);
console.log("the search elemnt found in : ",result);

//linera search
function linearSearch(arr,target){
    for(let i= 0;i<arr.length;i++){
        if(arr[i]===target){
        return i
        }
    }
    return -1
}
const arr = [1, 2, 3, 4, 5, 6];
const t = 4;
const resultsearch = linearSearch(arr, t);
console.log("the elemnt found by linear search :" ,resultsearch);