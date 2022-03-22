// Sem recursividade

const factorial = (number) => {
  let res = 1;

  for(let i = 0; i <= number; i += 1) {
    if(i === 0 || i === 1) {
      i = res;
    } else {
      res *= i;
    }
  }
  return res;
}

console.log(factorial(4));

// Com recursividade

const recursive = (num) => num > 0 ? num * recursive(num - 1) : 1;

console.log(recursive(4));