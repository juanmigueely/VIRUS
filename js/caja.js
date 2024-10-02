//hacer un programa para que el cajero registre un producto con su cantidad y valor unitario, construir la factura e imprimirla.







let products = [];
let precio = [];
let cantidad = [];

function saveProducts(){
    let nombre = prompt ("ingrese el nombre del producto");
    let nombre1 = parseFloat (prompt ("ingrese el valor unitario"));
    let nombre2 = parseInt (prompt ("ingrese la cantidad"));
    products.push(nombre);
    precio.push(nombre1);
    cantidad.push(nombre2);

    console.log(nombre);
    console.log(nombre1);
    console.log(nombre2);
    console.log("total ", nombre1*nombre2)
};


function boton2(){
    total = 0

    for (i=0 ; i < products.length ; i++){
        console.log("detalle    cantidad    valor   unitario    total");
       
        console.log(products[i],"    ",precio[i],"    ",cantidad[i],"    ",precio[i]*cantidad[i]); 
        total = total + (precio[i]*cantidad[i]); 
    };
    console.log ("este es el total a pagar ", total);    
};

function boton3(){

    let consulta = products.indexOf (prompt ("ingrese el producto a cambiar"));
    if (consulta == -1){
        console.log("no existe");

    }else{
        products[consulta] = parseInt (prompt("ingrese el nuevo nombre"));
        precio[consulta] = parseInt (prompt("ingrese el nuevo precio"));
        cantidad[consulta] = parseInt (prompt("ingrese el valor a cambiar"));
        
    };




};



