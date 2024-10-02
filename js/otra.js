let nombreproducto = []
let cantidadproducto = []
    

function boton1(){
    let nombre = prompt ("Ingrese el nombre del producto");
    let cantidad = parseInt (prompt("Ingrese la cantidad del producto"));

    nombreproducto.push (nombre);
    cantidadproducto.push (cantidad);

    console.log(nombre);
    console.log(cantidad);
};

function verproductos() {
  //buscar un elemento por su id
  const elemento = document.getElementById('datos'); 
  let acumulador = '';
  console.log(nombreproducto[0]);
  for (i=0; i<nombreproducto.length ; i++){
    acumulador +=       `<tr>
                            <td>`+nombreproducto[i]+`</td>
                            <td>`+cantidadproducto[i]+`</td>
                        </tr>`;
  }
  elemento.innerHTML = acumulador;
};