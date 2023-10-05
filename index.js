// write a function, chunk(arr, n), that returns chunked array of size n at the least. Look at example
// let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// function chunk(array, size) {
//     const chunkedArray = []
//     if (size > 0)
//     for (let i = 0; i < array.length; i += size) {
//      chunkedArray.push(array.slice(i, i + size))
//     }else{
//         return numbers ;
//     }

//     return chunkedArray
//   }

// console.log(chunk(numbers, 3))




// Given two strings, write a method to determine if they are one edit away from each other.


const string1 = "karim"
const string2 = "kim"
function checkLength(s1,s2){
    return s1.length > s2.length ? s1.length : s2.length
}
let length = checkLength(string1,string2)






function checkEdit(s1,s2){

    if(string1.length !== string2.length){
        return false
    }else {
        for (let i = 0 ; i < length ; i++ ){
            if()
        }
    }


}

console.log(checkEdit(string1,string2));