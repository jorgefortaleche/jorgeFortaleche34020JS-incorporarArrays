let edadUsuario = prompt("Para ingresar a nuestra plataforma debe ser mayor de edad. \nPorfavor ingrese su edad:" );


while(edadUsuario == "" ){
    edadUsuario = prompt(`Debe ingresar su edad para poder avanzar`);
}



if(edadUsuario >= 18 ){
    alert(`Bienvenido a nuestra plataforma`);
    nombreUsuario = prompt(`Porfavor ingrese su nombre completo.`);
    documentoUsuario = prompt(`ingrese su numero de documento.`); 
    zona = (prompt(`Elija la ubicacion que desea para su evento \n platea1, platea2, platea3, vip: `).toLowerCase());
}else{
    alert(`No estas en edad para ingresar`);
}

class BoletaUsuario{
    constructor(nombre, documento, zona){
        this.nombre = nombre;
        this.documento = documento;
        this.zona = zona;
    }
    precioEntrada(){
        if(this.zona === "platea1"){
            return 6500 * 1.15 //Valor ticket service
        }else if(this.zona === "platea2"){
            return 4500 * 1.15 
        }else if(this.zona === "platea3"){
            return 7500 * 1.15 
        }else if(this.zona === "vip"){
            return 10500 * 1.15 
        }
    }
    mensajeCliente(){
        alert(`${this.nombre}, escogiste la zona ${this.zona}, el precio que debes pagar por tu boleta, incluido el ticket service es: $${valorBoleta} pesos`);
    }
}

const cliente = new BoletaUsuario(nombreUsuario, documentoUsuario, zona);
const camilo = new BoletaUsuario("camilo lopez", "95631585", "platea1");
const luisa = new BoletaUsuario("luisa palomino", "95993698", "platea3");

let baseDeDatos = [];
baseDeDatos.push(cliente);
baseDeDatos.push(camilo);
baseDeDatos.push(luisa);

let valorBoleta;

console.log(valorBoleta = cliente.precioEntrada().toFixed(0));
console.log(baseDeDatos);
cliente.mensajeCliente();






