let dato1 = parseFloat(prompt("ingrese un numero"))
let dato2 = parseFloat(prompt("ingrese un numero"))
let dato3 = parseFloat(prompt("ingrese un numero"))

if (dato1 == dato2 && dato2 == dato3 ){
    console.log ("son iguales")
}
if (dato1 == dato2 && dato2 < dato3 ){
    console.log ("el n1 es = al n2 y el n3 es mayor ");
}
if (dato1 == dato2 && dato2 > dato3 ){
    console.log ("el n1 es = al n2 y el n3 es menor ");
}
if (dato1 == dato3 && dato3 < dato2 ){
    console.log ("el n1 es = al n3 y el n2 es mayor ");
}
if (dato1 == dato3 && dato3 > dato2 ){
    console.log ("el n1 es = al n3 y el n2 es menor ");
}
if (dato2 == dato3 && dato3 < dato1 ){
    console.log ("el n2 es = al n3 y el n1 es mayor ");
}
if (dato2 == dato3 && dato3 > dato1 ){
    console.log ("el n2 es = al n3 y el n1 es menor ");
}
if (dato1 > dato2 && dato2 > dato3 ){
    console.log ("el n3 es el mayor el de la mitad es el n2 y el n1 es el menor ");
}
if (dato1 > dato3 && dato3 > dato2 ){
    console.log ("el n3 es el mayor el de la mitad es el n2 y el n1 es el menor ");
}
if (dato3 > dato2 && dato2 > dato1 ){
    console.log ("el n1 es el menor el de la mitad es el n2 y el n3 es el mayor ");
}
if (dato2 > dato3 && dato3 > dato1 ){
    console.log ("el n1 es el menor el de la mitad es el n2 y el n3 es el mayor ");
}
if (dato2 > dato1 && dato1 > dato3 ){
    console.log ("el n1 es el menor el de la mitad es el n2 y el n3 es el mayor ");
}
if (dato3 > dato1 && dato1 > dato2 ){
    console.log ("el n1 es el menor el de la mitad es el n2 y el n3 es el mayor ");
}