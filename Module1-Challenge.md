
# Module-1:  Variables & Data types,Numbers 

Challenge-1:-
#Take the variable `myString` and capitalize the first letter of the word using some of the methods that we talked about in the last video. Put the result in a variable called `myNewString`


# Solution - 1:-
 let s = 'manasa';
 console.log(s.charAt(0).toUpperCase() + s.slice(1));

# Solution - 2:-
let s = 'manasa';
 console.log(s.charAt(0).toUpperCase() + s.substring(1));


 Challenge-2:- 
a:- Create a variable called `x` that is a random number between 1 and 100 along with a variable called `y` that is a random number between 1 and 50.

# Solution:- 
 - let x = Math.floor(Math.random()*100 + 1);
 - let y = Math.floor(Math.random()*50 + 1);

 console.log(x,y);



b:- Create a variable for the sum, difference, product, quotient and remainder of `x` and `y`. Log the output in a string that shows the two numbers of `x` and `y` along with the operator and result.
 
 let sum = x + y;
 let difference = x - y;
 let product = x * y;
 let quotient = x / y;
 let remainder = x % y;

  console.log(`The output of operations of x and y is ${sum}`);
  console.log(`The output of operations of x and y is ${difference}`); 
  console.log(`The output of operations of x and y is ${product}`); 
  console.log(`The output of operations of x and y is ${quotient}`);
   console.log(`The output of operations of x and y is ${remainder}`);
 