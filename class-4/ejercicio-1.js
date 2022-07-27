const traducirPalabra = (palabra) => {
    switch(palabra) {
        case "casa":
            return "house";

        case "mesa":
            return "table";

        case "perro":
            return "dog";

        case "gato":
            return "cat";

        default:
            return "";
    }
}

console.log(traducirPalabra("deprimision"));