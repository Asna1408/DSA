  
   class HashTable{
    constructor(){
      this.table = {}
   }

   hash(key){
    const hashvalue = key.toString().length%100
    return hashvalue
   }

   Insert(key,value){
    const hashvalue = this.hash(key)
    this.table[hashvalue] = value;
   }

   get(key){
    const hashvalue = this.hash(key)
    return this.table[hashvalue]
   }

   remove(key){
    const hashvalue = this.hash(key)
    this.table[hashvalue] = undefined
   }
}

const MyHash = new HashTable()
MyHash.Insert("Name","asna")
MyHash.Insert("age","15")
MyHash.Insert("place","kalamsserry")
console.log(MyHash.get("Name"))
MyHash.remove("age")
console.log(MyHash.get("age"))

//to find the doubles no
const twiceRepeatingElements = (str)=>{
   const count = {};
   let i =1;
   while(i<str.length){
           if(str[i] === str[i-1]){
                   if(count[`${str[i]}${str[i-1]}`])
                           count[`${str[i]}${str[i-1]}`]++;
                   else
                           count[`${str[i]}${str[i-1]}`] = 1;
                   i+=2;
           }else
                   i++;
   }
   return count;
}

console.log(twiceRepeatingElements('aaayybhhyykbbaaa'));

//to find the count of character
function countofnumber(array){
        const hashMap ={}
        for(let i=0;i<array.length;i++){
                const char = array[i]
                hashMap[char]=(hashMap[char]?hashMap[char]:0)+1
             
        }
        return hashMap
}

const inputString = "aabbdcfrrthyus";
const counts = countofnumber(inputString);
console.log(counts)


//to retrive the char with count 1
function countofnumber(array){
        const hashMap ={}

        for(let i=0;i<array.length;i++){
                const char = array[i]
                hashMap[char]=(hashMap[char]||0)+1
              
        }

        const result =[]
        for (let i = 0; i < array.length; i++) {
                const char = array[i];
                if (hashMap[char] === 1) {
                 result.push(char);
                }
              }
        return result.length>0?result:null
}

const inputString1 = "aabbdcfrrthyus";
const counts1 = countofnumber(inputString);

if (counts1 !== null) {
        console.log(`The character with a count of 1 is: ${counts1}`);
      } else {
        console.log("No character with a count of 1 found.");
      }






