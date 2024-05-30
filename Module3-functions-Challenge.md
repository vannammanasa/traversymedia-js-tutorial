Challenge-1:-
# Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.

Sol:-
# Normal function:-
  function getCelsius(fahrenheit){
    const celsius = ((fahrenheit - 32) * 5) / 9;


      return celsius;
  }
  console.log(Math.round(getCelsius(102))); //39

# Arrow function:-
  const getCelsius = (fahrenheit) => {
  const celsius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celsius);
};
console.log(getCelsius(102)); //39
  


# Challenge-2:-

Create an arrow function called `minMax()` that takes in an array of numbers and returns an object with the minimum and maximum numbers in the array?

Sol:-

const minMax= (array)=>{
  const minNumber = Math.min(...array); //using spread operator
  const maxNumber = Math.max(...array);
  return {minNumber,maxNumber};
}
console.log(minMax([5,7,8,9,34,78,100])); //Object {minNumber: 5, maxNumber: 100}




# Challenge-3:-

Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width of a rectangle outputs it to the console in a message as soon as the page loads.


Sol:- 

((length,width){
  const area = length*width;
  const result =`the area of rectangle is ${area}`;

  console.log(result);

})(4,7); // 28