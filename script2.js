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

function arrayCalculate(numbersArray){
  let ans = numbersArray[0];
  for (let i=1; i<numbersArray.length; i += 2){
    let ops = numbersArray[i];
    let num = numbersArray[i+1];
    ans = calculations(ans, num, ops);
  }
  return ans;
}

const calculate = [5, "%", 2, "/" , 2, "+", 1];
console.log(arrayCalculate(calculate));