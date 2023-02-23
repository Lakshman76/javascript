// Array :- It a data structure in javascript that stores elements in sequenced manner. It can hold element of any data type in single array.It ia a type of object.

// Declaration of array 
// 1. using square bracket
let fruits = ["apple" , "pomegranate" , "banana"];
console.log(fruits);

//2. using aray constructor
let num = new Array(1,2,3,4,5);
console.log(num);
let empty_array = new Array(5);
console.log(empty_array); // [ <5 empty items> ]

//3. using array literals 
let players = Array("MSD", "Virat", "SKy", "KL Rahul",);
console.log(players);

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
 console.log(name);

 // 3. shift():- It also removes one element but from the first position and return the removed element.
 let first_element = name.shift();
 console.log(first_element); // Lakshman
 console.log(name);

 // 4. unshift():- It is used to insert one more elements at the beginning of the array. And returns new size of array.
 length = name.unshift("Lakshman" , "Vishal");
 console.log(length); //5
 console.log(name); // [ 'Lakshman', 'Vishal', 'Prakash', 'Abhisek', 'Nitin' ]

 // 5. concat():- It concatenate two or more array and return modified array.
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let new_array = arr1.concat(arr2).concat(7,8,9);
console.log(new_array);

// 6. join():- It is used to join the all elements of the array into a string. The elements are separated by special character. if no specifired the separated by comma.

let result1 = name.join();
console.log(result1);
result1 = name.join(" @ ");
console.log(result1);
result1 = name.join(" - ");
console.log(result1);

// 7. slice():- It is used to extract a portion of an array and return new array without affected new array. It has two paramaeter 'start'(from which extracted is started) and 'end'(extracted is done till end-1)

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
console.log(device);

// 10. indexof():- it is used to find the index of specified element.

let index = device.indexOf("mobile");
console.log(index);