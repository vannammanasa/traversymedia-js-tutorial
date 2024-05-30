Challenge-1:-

Create a function called `calculator` that takes three parameters: `num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. The function should return the result of the calculation. If anything other than the four operators is passed in, the function should return an error message.

Sol:-
function calculator(num1,num2,operator){


  let result;
  switch(operator){
    case '+';
      result = num1+num2;
      break;
    case '-';
      result = num1-num2;
      break;
    case '*';
      result = num1*num2;
      break;
    case '/';
      result = num1/num2;
      break;
    default:
      result="Invalid Operator";
  }

  console.log(result);
  return result;
}
calculator(3,7,'*'); //21