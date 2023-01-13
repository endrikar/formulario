function enviar(){
    var nombre=document.getElementById("nombre").value;
    var correo= document.getElementById("correo").value;
    localStorage.setItem("name",nombre);
    localStorage.setItem("email",correo);
    var saludo=`Hola ${nombre}!
    te has registrado con el siguiente correo: ${correo}`;
    alert(saludo);
}
function climarecomen(){ 
    var clima=document.getElementById("clima").value
    var mensaje2;
    //clima validos soleado, nubleado,lluvioso
    switch(clima){
        case 'soleado':
        mensaje2="usa bloqueador,gorro y sombrilla";
        break;
        case 'nublado':
        mensaje2="usa sueter y quedate en casa";
        case'lluvioso':
        mensaje2= "usa paraguas y abrigate!";
        break;
        default:
        mensaje2= "ingresa un clima valido";
        break;
    }
    alert(mensaje2);
}