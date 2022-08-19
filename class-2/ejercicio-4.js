const quienGana = (cartaNumeroA, cartaTipoA, cartaNumeroB, cartaTipoB) => {
  if (cartaNumeroA > cartaNumeroB) {
    if (cartaNumeroB <= 3 && cartaNumeroA >= 4) {
      if (
        cartaNumeroA === 7 &&
        (cartaTipoA === `espada` || cartaTipoA === `oro`)
      ) {
        if (
          cartaNumeroB === 1 &&
          (cartaTipoB === `espada` || cartaTipoB === `basto`)
        ) {
          return `La segunda carta gana`;
        }
        return `La primera carta gana`;
      }
      return `La segunda carta gana`;
    }
    return `La primera carta gana`;
  } else if (cartaNumeroB > cartaNumeroA) {
    if (cartaNumeroA <= 3 && cartaNumeroB >= 4) {
      if (
        cartaNumeroB === 7 &&
        (cartaTipoB === `espada` || cartaTipoB === `oro`)
      ) {
        if (
          cartaNumeroA === 1 &&
          (cartaTipoA === `espada` || cartaTipoA === `basto`)
        ) {
          return `La primera carta gana`;
        }
        return `La segunda carta gana`;
      }
      return `La primera carta gana`;
    }
    return `La segunda carta gana`;
  } else {
    if (cartaNumeroA && cartaNumeroB === 1) {
      if (cartaTipoA === "espada") {
        return `la primera carta gana`;
      } else if (cartaTipoB === "espada") {
        return `la segunda carta gana`;
      } else if (cartaTipoA === "basto") {
        return `la primera carta gana`;
      } else if (cartaTipoB === "basto") {
        return `la segunda carta gana`;
      }
      return `Las cartas con pardas`;
    }

    if (cartaNumeroA && cartaNumeroB === 7) {
      if (cartaTipoA === "espada") {
        return `La primera carta gana`;
      } else if (cartaTipoB === "espada") {
        return `La segunda carta gana`;
      } else if (cartaTipoA === "oro") {
        return `La primera carta gana`;
      } else if (cartaTipoB === "oro") {
        return `La segunda carta gana`;
      }
    }

    return `las cartas son pardas`;
  }
};

console.log(quienGana(7, "oro", 7, "espada"));