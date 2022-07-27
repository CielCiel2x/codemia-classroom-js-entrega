const wrapAroundKms = (kms) => {
    if(Number(kms) > 99999) {
        return kms - 100000;
    } else if (Number(kms) < 0) {
        return "el número debe ser positivo";
    } else if (kms === null || kms === undefined || kms === "" || typeof kms == "boolean") {
        return "error";
    } else {
        return kms;
    }
}

console.log(wrapAroundKms(0))
console.log(wrapAroundKms(99999))
console.log(wrapAroundKms(100000))
console.log(wrapAroundKms(100001))
console.log(wrapAroundKms(null))
console.log(wrapAroundKms(undefined))
console.log(wrapAroundKms(""))
console.log(wrapAroundKms(true))
console.log(wrapAroundKms(false))