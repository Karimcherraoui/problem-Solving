// write a function, chunk(arr, n), that returns chunked array of size n at the least. Look at example
console.log("-------------------------- The first problem solving --------------------------")

let numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function chunk(array, size) {
    const chunkedArray = []
    if (size > 0)
    for (let i = 0; i < array.length; i += size) {
     chunkedArray.push(array.slice(i, i + size))
    }else{
        return numbers ;
    }

    return chunkedArray
  }

console.log(chunk(numbers, 3))

console.log("--------------------------------------------------------------------------------")



console.log("-------------------------- The second problem solving --------------------------")



// Given two strings, write a method to determine if they are one edit away from each other.
const string1= "oucod";
const string2= "youcode";

function checkEdit(s1, s2) {
  let arr1 = Array.from(s1);
  let arr2 = Array.from(s2);
  let char = [];
  let charemoved = [];

  let l1 = arr1.length;
  let l2 = arr2.length;
  if (Math.abs(l1 - l2) >= 3) {
    console.log("Vous avez besoin plus de 2 modifications.");
  } else {
    let i = 0;
    while ((l2 - l1) <= 2 && (l2 - l1) > 0) {
      if (arr2[i] !== arr1[i]) {
        charemoved.push(arr2[i]);
        arr2.splice(i, 1);
        l2--;
      } else {
        i++;
      }
    }

    while ((l2 - l1) < 0) {
      if (arr1[i] !== arr2[i]) {
        char.push(arr1[i]);
        arr2 = [
          ...arr2.slice(0, i),
          arr1[i],
          ...arr2.slice(i)
        ];
        l1--;
      } else {
        i++;
      }
    }
  }

  return [arr1.join(''), arr2.join(''), char,charemoved];
}

const [str1, str2, char,charemoved] = checkEdit(string1, string2);

console.log("String 1:", str1);
console.log("String 2:", str2);
console.log()
if(charemoved.length == 0){

    console.log("Character insert:", char);
}else if(char.length == 0){
    console.log("Character removed:", charemoved);
}


console.log("--------------------------------------------------------------------------------")



