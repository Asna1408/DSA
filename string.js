//convert to lowercase
function tolower(str){
    let result ="";
    for(let i =0;i<str.length;i++){
        let charCode = str.charCodeAt(i)
        if(charCode >=65 && charCode <=90 ){
            result+= String.fromCharCode(charCode+32)
        }else{
            result +=str[i]
        }
    }
    return result
}

const string = "HELLO"
let result = tolower(string)
console.log(result) //hello


//convert to uppercase
function toupper(str){
    let result ="";
    for(let i =0;i<str.length;i++){
       let charcode =  str.charCodeAt(i)
       if(charcode >=95 && charcode <=122){
        result += String.fromCharCode(charcode-32)
       } else{
        result += str[i]
       }
    }
    return result;
}

const string1 =  "hello"
let result1 = toupper(string1)
console.log(result1) //HELLO

//to remove vowels
function removevowels(str){
    return str.replace(/[aeiuoAEIOU]/g,"")
}

function removevowels(str){
    let resultstr =""
   let  strvowel =['a','e','i','o','u','A','E','I','O','U']
   for(let i=0;i<str.length;i++){
if(!strvowel.includes(str[i])){
    resultstr += str[i]
}
   }
   return resultstr
}

let string2 ="Hello world"
let vowels = removevowels(string2)
console.log(vowels) //Hll wrld

//to revesrse a string
function reverse(str){
    let reverseString =""
    for(let i =str.length-1;i>=0;i--){
        reverseString += str[i]
    }
    return reverseString 

}

let string3 = "Helloworld"
let result3 = reverse(string3)
console.log(result3) //dlrowolleH


//to change to a another word alphabet
function change(str,key){
    let newkey =key%26
    let charArray =[]
    for(let i=0;i<=str.length-1;i++){
        let charcode =str.charCodeAt(i)+newkey
        if(charcode<=122){
            charArray[i] = String.fromCharCode(charcode)
        }else{
            charArray[i]= String.fromCharCode(96+(charcode%122))
        }
    }
    return charArray.join('')
}

let string5 = "hello"
let result5 = change(string5,2)
console.log(result5)  //jgnnq