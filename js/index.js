var boton = document.getElementById("boton");

boton.addEventListener("click",()=>{
    var salida = document.getElementById("informacion");
    var nombre = document.getElementById("txtnombre").value;
    var ciudad = document.getElementById("txtciudad").value;
    
    var options = document.getElementsByName("op1");
    var sexos = document.getElementsByName("rd");

    salida.innerHTML=nombre + " ";
    salida.innerHTML+=ciudad + " ";

    options.forEach((item) => {
    if(item.checked){
        salida.innerHTML+=item.value + " ";
    } 
    });

    sexos.forEach((item) => {
        if(item.checked){
            salida.innerHTML+=item.value+ " ";
        }
    });

});