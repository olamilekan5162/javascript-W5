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


console.log("WELCOME TO MY CALCULATOR APP");
//parseInt is the same as Integer.parseInt() in JAVA so i use opolo😂 i did not tunmise o;😂

// let num1 = parseInt(prompt("enter the first Number"));
// let num2 = parseInt(prompt("Enter the second Number"));
// let ops = prompt("Enter the symbol for the operation you want to perfrom; e.g +, -, *, /, %");
// console.log(calculations(num1, num2, ops));

// wrote the code with my phone and i just found out now that vscode does not know what prompt is

console.log(calculations(15, 0, "/"));