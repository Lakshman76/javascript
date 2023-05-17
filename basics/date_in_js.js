let myDate = new Date();

console.log(myDate); // 2023-05-16T13:58:44.063Z --> it changes as time and date changes.

console.log(typeof(myDate)); // object

// toString() :-
console.log(myDate.toString()); // Tue May 16 2023 14:01:14 GMT+0000 (Coordinated Universal Time)

// toDateString() :-
console.log(myDate.toDateString()); // Tue May 16 2023

// toISOString() :-
console.log(myDate.toISOString()); // 2023-05-16T13:58:44.063Z

// toJSON() :-
console.log(myDate.toJSON()); // 2023-05-16T13:58:44.063Z

// toLocaleDateString() :- 
console.log(myDate.toLocaleDateString()); // 5/16/2023

// toLocaleString() :-
console.log(myDate.toLocaleString()); // 5/16/2023, 2:13:17 PM

// toLocaleTimeString() :-
console.log(myDate.toLocaleTimeString()); // 2:17:20 PM --> US time zone

// toTimeString() :-
console.log(myDate.toTimeString());  // 14:01:14 GMT+0000 (Coordinated Universal Time)

// toUTCString() :- 
console.log(myDate.toUTCString()); // Tue, 16 May 2023 14:20:19 GMT