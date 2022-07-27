const mostrarMensajeSegunEdadIf = (edad) => {
    if (edad >= 18) {
      // Anidé el if de 90 años para que no tenga que verificarlo si no es mayor de edad, no se si es mas optimo o no pero tengo entendido que así se evita hacer una verificacion extra cuando no es necesario
      if (edad > 90) {
        return "Que edad tan inusual, puede pasar!";
      }
  
      return "Bienvenido, puede pasar";
    } else {
      return "Lo siento, eres menor de edad";
    }
  };
  
  console.log(mostrarMensajeSegunEdadIf(90));
  
  const mostrarMensajeSegunEdadTernario = (edad) => {
    let mensajePermiso =
      edad >= 18
        ? edad >= 90
          ? "Que edad tan inusual, puede pasar!"
          : "Bienvenido, puede pasar"
        : "Lo siento, eres menor de edad";
  
    return mensajePermiso;
  };
  
  console.log(mostrarMensajeSegunEdadTernario(90));