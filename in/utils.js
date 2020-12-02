function hello_world() {
  console.log("hello world");
}

function interger_sum(integer_to_sum) {
  let integer_sum = 0;
  for (let i = 1; i <= integer_to_sum; i++) {
    integer_sum = integer_sum + i;
  }
  return integer_sum;
}
