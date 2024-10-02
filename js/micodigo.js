
//for (contador, comparacion, incremento)

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

// for (let contador = 9; contador < 40; contador++){
//     console.log("contador es ", contador, " el doble es ", contador + contador);
// }

// for (let j = 0; j < 5 ; j--){
//     console.log("jajajaja");
// }

// function numerospares(){
//     for (let i = 1; i <= 100; i = i + 2){
//         console.log(i);
//     }
// }


//1 . solicitar al usuario un numero del 1 al 10 eh imprimir la tabla de multiplicar del 1 al 10 de ese numero

//2 . pedirle 2 numeros al usuario eh imprimir los numeros pares que esten entre esos 2 numeros

//3 . pedir 10 numeros al usuario, imprimir el acumulado de los 10 numeros y su promedio

//4 . imprimir todas las tablas de multiplicar del 1 al 10 


function ej1(){
    let n = parseInt (prompt("ingrese un numero del 1 al 10"))
    for (let i = 1; i < 10; i++){
        mult = n * i
        console.log ( n,  " * " , i , " = ", mult );
    }
}
function ej2(){
    let num1 = parseInt (prompt ("ingrese un numero "));
    let num2 = parseInt (prompt ("ingrese otro numero "));

    for (let i = num1 ; i <= num2 ; i++){
        if (i % 2 == 0 ){
            console. log ("los numeros pares entre el ", num1 ,  " y el ", num2, " son ", i);
        }
    }
}

function ej3(){
    acum = 0

    for (let i = 1 ; i <= 3 ; i++){
        let n = parseInt (prompt ("ingrese un numero ") )

        acum = acum + n
        promedio = acum / i 
    }
    console . log ("este es el acumulado de los numeros" , acum )
    console . log ("este es el promedio de los numeros" , promedio )
}

function ej4(){
    for ( let i = 1; i <= 10 ; i ++){

        console.log ("***********")
        
        for ( let j = 1; j <= 10 ; j ++){

            multi = j * i
            console . log ( i, " * ", j , " = ", multi  )
        }
    }
}
function ej5(){
    for (let i = 1; i < 10 ; i ++  ){
        let n = parseFloat ( prompt ("ingrese un numero"))

        if ( n = 0 ){
            i = 2
        }
    }
}






// solicitar varios numeros al usuario hasta que presione el 0, imprimir cuantos pares ingreso, cuantos impares, cuantos positivos y cuantos negativos