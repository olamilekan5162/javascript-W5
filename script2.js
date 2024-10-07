//i will be using the exact code from script one, chei i miss python😭😩😂

// still working on this one but i gat to submit before 9am

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
  let ans;
  // removing parseInt...
  ans = numbersArray[0];
  //let i;
  for (let i=1; i<numbersArray.length; i += 2){
    let ops = numbersArray[i];
    let num = numbersArray[i+1];
    ans = calculations(ans, num, ops);
  }
  return ans;
}

// i dont know why this gba "+" dey do concatenation o
// let try not using parseInt maybe it will work

const calculate = [5, "%", 2, "/" , 2, "+", 1];
console.log(arrayCalculate(calculate));

// bug fixed 1. i was comparing i with numbersArray instead of numbersArray.length. 
// 2. removed parseInt and concatenation problem was fixed