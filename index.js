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


// function checkLength(s1,s2){
    //     return s1.length > s2.length ? s1 : s2
    // }
    // let str = checkLength(string1,string2)
    
    // console.log(str)
    
    
    
//     const string1 = "karim"
//     const string2 = "kim"



// function checkEdit(s1,s2){

//     let char = []
//     let index = []

//     let arr1 = Array.from(s1);
//     let arr2 = Array.from(s2);


//     let l1 = arr1.length ;
//     let l2 = arr2.length ;

    

//     if(Math.abs(l1 - l2)>2 ){
//         console.log("vous avez besoin plus de 2 modification ")
//     }else if ((l1 - l2) <= 2 && (l1 - l2) > 0 ) {
//         for(i = 0 ; i < l1 ; i++ ){
//             console.log(arr2[i])
//             if(arr1[i] !== arr2[i]){
//                 arr1.splice(i,1)
//             }
            
//         }
//         console.log(arr1,arr2)
//     }

//     return [char , index]

// }


// console.log(checkEdit(string1,string2));

// checkEdit(string1,string2)




const string1 = "oucod";
const string2 = "youcode";

function checkEdit(s1, s2) {
  let arr1 = Array.from(s1);
  let arr2 = Array.from(s2);

  let l1 = arr1.length;
  let l2 = arr2.length;
console.log(Math.abs(l1 - l2))
  if (Math.abs(l1 - l2)>=3) {
    console.log("Vous avez besoin plus de 2 modifications.");
  }else{

  let i = 0;
  while ((l1 - l2) <= 2 && (l1 - l2) > 0) {
    if (arr1[i] !== arr2[i]) {
      arr1.splice(i, 1);
      l1--;
    } else {
      i++;
    }
  }
  while ((l1 - l2) < 0 ) {
    if (arr2[i] !== arr1[i]) {
        [
            // part of the array before the specified index
            ...arr1.slice(0, i),
            // inserted item
            arr2[i],
            // part of the array after the specified index
            ...arr1.slice(i)
          ]
      l2--;
    } else {
      i++;
    }
  }
  
  }
  
  return [arr1.join(''), arr2.join('')];


}

const [str1, str2] = checkEdit(string1, string2);
console.log("Modified String 1:", str1);
console.log("Modified String 2:", str2);
