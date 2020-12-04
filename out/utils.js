function helloWorld() {
  console.log("hello world");
}

function intergerSum(integerToSum) {
  let integerSum = 0;

  for (let i = 1; i <= integerToSum; i++) {
    integerSum = integerSum + i;
  }

  return integerSum;
}