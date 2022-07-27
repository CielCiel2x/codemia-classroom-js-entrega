const higherThanZero = (numA, numB) => {
    if (numA === 0 || numB === 0) {
      return "ninguno de los numeros debe ser cero";
    } else if (numA > 0 && numB > 0) {
      return 1;
    } else if (numA < 0 && numB < 0) {
      return -1;
    } else if (numA > 0 && numB < 0) {
      return 0;
    }
    return 0;
  };
  console.log(higherThanZero(32, 0));
  console.log(higherThanZero(0, 5));
  console.log(higherThanZero(32, 5));
  console.log(higherThanZero(-2, -3));
  console.log(higherThanZero(5, -152));
  console.log(higherThanZero(-2, 12424123123412));