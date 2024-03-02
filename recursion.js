 
  
  function f(n){
    if(n<=1){
        return
    }
    f(n-1)
 console.log(n)
    f(n-1)
}

let num =3
f(num)

//fibnoccie
function fibnoccie(num){
    if(num<=1){
        return num
    }
    return fibnoccie(num-1)+fibnoccie(num-2)
}

let n = 5
let result=fibnoccie(n)
console.log(result)

//factorial
function factorial(num){
    if(num<=1){
        return 1
    }else{
        return num*factorial(num-1)
    }
}

let number = 5
let result1 = factorial (number)
console.log(result1 
)


