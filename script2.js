//i will be using the exact code from script one, chei i miss python😭😩😂

// still workig on this one but i gat to submit before 9am

function calculations(num1, num2, ops){
  let result;
  switch(ops){
    case "+":
      result = num1 + num2;
      break;
    case "-":
      if (num1 > num2){
        result = num1 - num2;
        break;
      }
      else{
        result = num2 - num1;
        break;
      }
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
  let result = parseInt(numbersArray[0]);
  //let i;
  for (let i=0; i<numbersArray; i += 2){
    let ops = numbersArray[i];
    let num = numbersArray[i+1];
    result = calculations(result, num, ops)
  }
  return result;
}

const calculate = ["1", "+", "5"];
console.log(arrayCalculate(calculate));