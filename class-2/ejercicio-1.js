const horasDelDiaIf = (hora) => {
    if (hora > 23 || hora < 9) {
      return "no estoy disponible, llamame entre las 9 y las 23";
    } else if (hora >= 19) {
      return "buenas noches";
    } else if (hora >= 14) {
      return "buenas tardes";
    } else if (hora >= 9) {
      return "buenos dias";
    }
  };
  
  console.log(horasDelDiaIf(14));
  
  const horasDelDiaTernario = (hora) => {
    let saludo =
      hora > 23
        ? "no estoy disponible, llamame entre las 9 y las 21"
        : hora >= 19
        ? "buenas noches"
        : hora >= 14
        ? "buenas tardes"
        : hora >= 9
        ? "buenos dias"
        : "no estoy disponible, llamame entre las 9 y las 21";
  
    return saludo;
  };
  
  console.log(horasDelDiaTernario(24));
  