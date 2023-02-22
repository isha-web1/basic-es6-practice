// 1.    You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
//       Now convert this array into an even array (array with even
//       numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
//       method. Hints: add one to any odd number and it will become an even
//       number.


// using map()
// const number = [1, 3, 5, 7, 9];
// const numbers = number.map(num => num + 1);
// console.log(numbers);


// using for loop
// const numbers = [1, 3, 5, 7, 9];
// const total = [];
// for(number of numbers){
//     const even = number + 1;
//     total.push(even);
    
// };
// console.log(total)


// 2.  You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
//     return/get all the elements which are divisible by 10 using
//     array.filter() method.


// using filter()


// const numbers = [33, 50, 79, 78, 90, 101, 30];
// const divisibleNumber = numbers.filter(num => num % 10 === 0);

// console.log(divisibleNumber);

// ans : [50, 90, 30]


// 3.  Now do the same task of question 2. But do this using array.find()
//     method. Then compare the output of question 2 & question 3.


// const numbers = [33, 50, 79, 78, 90, 101, 30];

// const divisibleNumber = numbers.find(num => num % 10 === 0);

// console.log(divisibleNumber);


// ans : 50 (first of number, because it is find() methode)