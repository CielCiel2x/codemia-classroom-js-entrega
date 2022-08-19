const seLlega = (cantidadGalones, promedioKmsGalon, distancia) => {
    return cantidadGalones * promedioKmsGalon >= distancia;
  };
  
  console.log(seLlega(4, 25, 80));
  