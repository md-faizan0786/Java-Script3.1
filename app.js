console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");


//For Loop
console.log("using Loop");

//increment
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

//Decrement
for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Print all odd numbers(1 to 15)
for (let i = 1; i <= 15; i = i+2) {
    console.log(i);
}

// Print all even number(2 to 10)
for (let i = 2; i <= 10; i = i+2) {
    console.log(i);
}

// Print the multiplication table for 5
for (let i = 5; i <= 50; i = i+5) {
    console.log(i);
}


let n = prompt("write your number for table:");
n = parseInt(n);

for (let j = n; j <= n*10; j = j+n) {
    console.log(j);
}

//Nested Loop
console.log("//Nested loop");

for(let i = 1; i <= 3; i++) {
    console.log(`outer loop ${i}`);
    for(let j = 1; j<=3; j++) {
        console.log(j);
    }
}


// While Loop   &  break
console.log("// while loop");

let i = 1;
while (i <= 10) {
    if(i == 7) {
        break;
    }
    console.log(i);
    i++;
}


const favMovie = "avatar";
let guess = prompt("guess my favorite movie:");
while( (guess != favMovie) ) {
    if(guess == "quit") {
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess. please try again");
}

   if(guess == favMovie) {
    console.log(" Congrats!! ");
   }


   // Loop with Array 


//    let fruits = ["mango", "apple", "banana", "litchi", "orange"];

//    for(let i=0; i<fruits.length; i++) {
//     console.log(i, fruits[i]);
//    }




   // Nested loop with Nested Array
   let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

   for(let i=0; i<heroes.length; i++) {
    console.log(i, heroes[i]);
    for(let j=0; j<heroes[i].length; j++) {
        console.log( `j=${j}, ${heroes[i][j]}`);
    }
   }


   // for of loop
   let fruits = ["mango", "apple", "banana", "litchi", "orange"];
   for(fruit of fruits) {
    console.log(fruit);
   }

   for(char of "apnacollege") {
    console.log(char);
   }



//   practic Questions

// Qs 1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for(let i=0; i<arr.length; i++) {
    if(arr[i] == num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

// Qs 2  
let number = 287152;
let count = 0;
let copy = number;
while(copy > 0) {
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);


// Qs 3
let numb = 287152;
let copies = number;
let sum = 0;
while(copies > 0) {
    digit = copies % 10;
    sum += digit;
    copies = Math.floor(copies/10);
}
console.log(sum);



//Qs 4
let m =5;
let factorial = 1;

for(let i=1; i<=m; i++) {
    factorial *= i;
}
console.log(`factorial of ${m} is ${factorial}`);


//Qs 5
let arrr = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for(let i=0; i<=arrr.length; i++) {
    if(largest < arrr[i]) {
        largest = arrr[i];
    }
}
console.log(largest);