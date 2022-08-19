const mostrarMensajeSegunEdadIf = (edad) => {
  if (edad > 90) {
    return "Que edad tan inusual, puede pasar!";
  } else if (edad >= 18) {
    return "Bienvenido, puede pasar";
  } else {
    return "Lo siento, eres menor de edad";
  }
  };
  
  console.log(mostrarMensajeSegunEdadIf(90));
  
  const mostrarMensajeSegunEdadTernario = (edad) => {
    let mensajePermiso =
      edad > 90 ? "Que edad tan inusual, puede pasar!" :
      edad >= 18 ? "Bienvenido, puede pasar" :
      "Lo siento, eres menor de edad";

    return mensajePermiso;
  }
  
  console.log(mostrarMensajeSegunEdadTernario(90));