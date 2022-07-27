const auth = (age, acceptedTOS) => {
    if (age > 13) {
      if (acceptedTOS) {
        return true;
      }
      return "tenés que aceptar los términos y condiciones para ingresar";
    }
  
    if (acceptedTOS) {
      return "tenes que ser mayor de 13 para ingresar";
    }
    return "tenés que ser mayor de 13 y aceptar los terminos y condiciones para ingresar";
  };
  
  console.log(auth(15, true));
  console.log(auth(25, false));
  console.log(auth(2, true));
  console.log(auth(2, false));
  