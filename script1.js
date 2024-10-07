function calculations(num1, num2, ops){
  let result;
  switch(ops){
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
      if (num2 === 0){
        result = num1 + " not divisible by 0";
        break;
      }
      else {
        result = num1 / num2;
        break;
      }
    case "%":
      result = num1 % num2;
      break;
  }
  return result;
}


console.log("WELCOME TO MY CALCULATOR APP");
console.log(calculations(15, 0, "/"));