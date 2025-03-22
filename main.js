function validar (cadena){
    const p1 = "(";
    const p2 = ")";
    const c1 = "[";
    const c2 = "]";
    const l1 = "{";
    const l2 = "}";
    
    let validacion = [];

    for(let caracter of cadena){
        if (caracter === p1 || caracter === c1 || caracter === l1) {
            validacion.push(caracter);
        }else if (caracter === p2 || caracter === c2 || caracter === l2) {
            if (pila.length === 0) {
                return false;
        }

        let ultimo = validacion.pop();

        if ((caracter === p2 && ultimo !== p1) ||
            (caracter === c2 && ultimo !== c1) ||
            (caracter === l2 && ultimo !== l1)) {
            return false;
            }
        }
    }

    return validacion.length === 0;

}

let cadena = propmt("Escribe algo: ");

if(validar(cadena)){
    alert("La expresion es equilibrada");
}else{
    alert("La expresion no es equilibrada");
}