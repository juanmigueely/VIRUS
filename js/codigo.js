
function eje1(){
    let num = parseInt(prompt("ingrese un numero "));

    

    while(num !=0){
        if(nume !=0){
            if(num % 2 == 1){
                impares++;
            }else{
                pares++;
            };
    
            if(num > 0){
                positivos++;
            }else{
                negativos++;
            }
    
    
        }
    
        num = parseInt(prompt("ingrese un numero"))
    }
    console.log("impares ", impares);
    console.log("pares ", pares);
    console.log(" positivos ", positivos );
    console.log(" negativos ", negativos );
}


function eje2(){
    let impares = 0;
    let pares = 0;
    let positivos = 0;
    let negativos = 0;

    do{
        let num = parseInt( prompt("ingrese un numero "))
        if (num !=0){
            if (num % 2 == 0){
                pares++;
            }else{
                impares++;
            }
            if (num > 0){
                positivos++;
            }else{
                negativos++;
            }
        }
    }while (num !=0)

    console.log("impares ", impares);
    console.log("pares ", pares);
    console.log(" positivos ", positivos );
    console.log(" negativos ", negativos );
}

//solicitar una contraseña al usuario hasta que sea correcta

function eje3(){
    let num = parseInt( prompt("ingrese una contraseña "))

    while(num = 12345){
        document.write("contraseña correcta")
    }
}







