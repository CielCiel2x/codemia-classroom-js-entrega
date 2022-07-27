const returnName = (num) => {
    /*     if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        } else if (num % 3 === 0 ) {
            return "Fizz";
        } else if (num%5=== 0) {
            return "Buzz"
        } return num; */
  
    return num % 3 === 0 && num % 5 === 0
      ? "FizzBuzz"
      : num % 3 === 0
      ? "Fizz"
      : num % 5 === 0
      ? "Buzz"
      : num;
  };
  
  console.log(returnName(3));
  console.log(returnName(5));
  console.log(returnName(6));
  console.log(returnName(9));
  console.log(returnName(10));
  console.log(returnName(12));
  console.log(returnName(15));