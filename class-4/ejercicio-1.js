const traducirPalabra = (palabra) => {
    switch(palabra) {
        case "casa":
            return console.log("house");

        case "mesa":
            return console.log("table");

        case "perro":
            return console.log("dog");

        case "gato":
            return console.log("cat")

        default:
            break;
    }
}

traducirPalabra("perro");