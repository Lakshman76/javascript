// Array :- It a data structure in javascript that stores elements in sequenced manner. It can hold element of any data type in single array.It ia a type of object.

// Declaration of array 

// 1. using square bracket
let fruits = ["apple" , "pomegranate" , "banana"];
console.log(fruits); // [ 'apple', 'pomegranate', 'banana' ]

//2. using aray constructor
let num = new Array(1,2,3,4,5);
console.log(num);  // [ 1, 2, 3, 4, 5 ]
let empty_array = new Array(5);
console.log(empty_array); // [ <5 empty items> ]

//3. using array literals 
let players = Array("MSD", "Virat", "SKy", "KL Rahul",);
console.log(players);  // [ 'MSD', 'Virat', 'SKy', 'KL Rahul' ]

// Accessing elements in array
console.log(players[0]); // MSD 
console.log(players[5]); // undefined
console.log(players[-2]); // undefined

// **************** ARRAY METHOD ******************

// 1. push():- It insert one or more than one element in the list at end. After inserting it returns new length of the array.
let name = ["Lakshman" , "Prakash" , "Abhisek"];
let length = name.push("Nitin" , "Vishal");
console.log(name); // [ 'Lakshman', 'Prakash', 'Abhisek', 'Nitin', 'Vishal' ]
console.log(length); // 5

// 2. pop():- It remove one element from the last and return the removed element.
 let last_element = name.pop();
 console.log(last_element); // Vishal
 console.log(name);  // [ 'Lakshman', 'Prakash', 'Abhisek', 'Nitin' ]

 // 3. shift():- It also removes one element but from the first position or we can say that it shift all element at left by one position and return the removed element.
 let first_element = name.shift();
 console.log(first_element); // Lakshman
 console.log(name);  // [ 'Prakash', 'Abhisek', 'Nitin' ]
 console.log(name[-1]); // undefined     *** first element doesn't at -1 position. ***

 // 4. unshift():- It is used to insert one more elements at the beginning of the array. And returns new size of array.
 length = name.unshift("Lakshman" , "Vishal");
 console.log(length); //5
 console.log(name); // [ 'Lakshman', 'Vishal', 'Prakash', 'Abhisek', 'Nitin' ]

 // 5. concat():- It concatenate two or more array and return modified array.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let new_array = arr1.concat(arr2).concat(7,8,9);
console.log(new_array);  // [  1, 2, 3, 4, 5, 6, 7, 8, 9  ]

// 6. join():- It is used to join the all elements of the array into a string. The elements are separated by special character. if we don't specifired then it is separated by comma.

let result1 = name.join();
console.log(result1);  // Lakshman,Vishal,Prakash,Abhisek,Nitin
result1 = name.join(" @ "); 
console.log(result1);  // Lakshman @ Vishal @ Prakash @ Abhisek @ Nitin
result1 = name.join(" - ");
console.log(result1);  // Lakshman - Vishal - Prakash - Abhisek - Nitin

// 7. slice():- It is used to extract a portion of an array and return new array without affected original array. It has two paramaeter 'start'(from which extracted is started) and 'end'(extracted is done till end-1)

let some_name = name.slice(1 , 3);
console.log(some_name); // [ 'Vishal', 'Prakash' ]
console.log(name); // [ 'Lakshman', 'Vishal', 'Prakash', 'Abhisek', 'Nitin' ]


// 8. splice():- It is used to add or remove elements from the array and modified the original array. It return removed elements.
/*   syntax -      arrray.splice(start , deletecount , item1,item2,...) 
     start - index at which start changing the array. 
     deletecount - the No. of elements to be removed 
     item1, item2... - the elements to add to the array from index 'start'
*/
let number = [1,2,3,4,5,6,7];
let removed = number.splice(2 , 3 , 10, 11 , 12 , 13); 
console.log(number); // [  1,  2, 10, 11, 12, 13,  6,  7 ]
console.log(removed); // [ 3, 4, 5 ]


// 9. reverse():- It is used to reverse the elements of array and modified original array

let device = ["mobile" , "Laptop" , "desktop" ,"tab"];
console.log(device);
device.reverse();
console.log(device); // [ 'tab', 'desktop', 'Laptop', 'mobile' ]

// 10. indexof():- it is used to find the index of specified element of the array.

let index = device.indexOf("mobile");
console.log(index); // 3

/*************************** split method() *****************************/

let myDetail = 'My name is Lakshman kumar , roll 62, age 20';
let arr = myDetail.split(' '); // here should be single space in parenthesis.
console.log(arr); // [ 'My',  'name', 'is', 'Lakshman', 'kumar' , ',' , 'roll', '62,' , 'age',   '20'   ]

let myName = 'Lakshman';
let anotherArr = myName.split('');
console.log(anotherArr); // [ 'L', 'a', 'k', 's', 'h', 'm', 'a', 'n' ]

let oneMoreArr = myDetail.split(); // it work when no space and more than one space in parenthesis.
console.log(oneMoreArr); // [ 'My name is Lakshman kumar , roll 62, age 20' ]

/****************************** Array.from() method *********************** */

function multiByTwo(){
     let args = Array.from(arguments);
     let arr  = args.map((item)=> item*2)
     console.log(arr);
}
multiByTwo(1,3,5); // [ 2, 6, 10 ]
multiByTwo(7,8,9); // [ 14, 16, 18 ]
