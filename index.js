// QUESTION 1
 
/*
 Mutation in context of JavaScript arrays is basically changing the array itself instead 
 of returning a new array with the new changes whereas Non-Mutation is returning a whole new array 
 which has all the changes.

 Mutating array methods include:
 array.pop(), array.push(), array.shift(), array.sort(), array.splice()
 
 Non-mutating array methods include:
 array.concat(), array.includes(), array.join(), array.slice(), array.toString()
 */

// QUESTION 2

    let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

    // Add ‘Kotlin’ to the end of the array
    languages.push('Kotlin');
    
    // Add ‘Java’ after ‘Ruby’
    languages.splice(3, 0, 'Java');
    
    // Remove the first item in the array
    languages.shift();
    
    // Add ’Scala’ and ‘Swift’ to the beginning of the array
    languages.unshift('Scala', 'Swift');

    // Replace ‘PHP’ with ‘Go’ and ‘Rust’
    languages.splice(5, 1, 'Go', 'Rust');
 
    console.log(languages);
 
 
 // QUESTION 3
 
     let fruit = ['apple', 'mango', 'banana'];
     function changeFruit( fruit ) {
             fruit[2] = "orange";
             return fruit;
     }
     console.log(changeFruit(fruit)); 
     //value of: fruit = [ 'apple', 'mango', 'orange' ]
 
 
 // QUESTION 4
 
     function maxVal (num) {
         let maxValue = Math.max(...num);
         return maxValue;
     }
 
     console.log(`Maximum value is ${maxVal([2,7,3,9,1])}`); // Maximum value is 9
 
 
 // QUESTION 5
     function valTimesIndex (arrayOfVal) {
         let newArray = [];
         let multiplierValue;
 
         for (let i = 0; i < arrayOfVal.length; i++) {
             multiplierValue = arrayOfVal[i] * arrayOfVal.indexOf(arrayOfVal[i]);
 
             newArray.push(multiplierValue);
         }
 
         return newArray;
     }
 
     console.log(valTimesIndex([1,2,3])); // [ 0, 2, 6 ]
     console.log(valTimesIndex([5,10,15])); // [ 0, 10, 30 ]