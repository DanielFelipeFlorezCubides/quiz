function validar (cadena){
    const p1 = "(";
    const p2 = ")";
    const c1 = "[";
    const c2 = "]";
    const l1 = "{";
    const l2 = "}";
    let validacion;

    for(validacion in cadena){
        if (cadena.includes(p1) && cadena.includes(p2)){
            if(cadena.includes(c1) && cadena.includes(c2)){
                if(cadena.includes(l1) && cadena.includes(l2)){
                    validacion = true;
                }
            }
        }if (cadena.includes(p1) && cadena.includes(p2)){
            if(cadena.includes(c1) || cadena.includes(c2)){
                if(cadena.includes(l1) && cadena.includes(l2)){
                    validacion = false;
                }
            }
        }if (cadena.includes(p1) && cadena.includes(p2)){
            if(cadena.includes(c1) && cadena.includes(c2)){
                if(cadena.includes(l1) || cadena.includes(l2)){
                    validacion = false;
                }
            }
        }if (cadena.includes(p1) || cadena.includes(p2)){
            if(cadena.includes(c1) && cadena.includes(c2)){
                if(cadena.includes(l1) && cadena.includes(l2)){
                    validacion = false;
                }
            }
        }else if (cadena.includes(p1) || cadena.includes(p2) || cadena.includes(c1) || cadena.includes(c2) || cadena.includes(l1) || cadena.includes(l2)){
            validacion = false;
        }else{
            validacion = true;
        }
    }

    return validacion;
}


let cadena = prompt("Escribe algo: ");

if(validar(cadena) === true){
    alert("La expresion es equilibrada");
}else{
    alert("La expresion no es equilibrada");
}