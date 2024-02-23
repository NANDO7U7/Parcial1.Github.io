function agregarnuevoelemento(){
    var nuevoelemento= document.createElement("p");
nuevoelemento.textContent = "Tan impredecible como brutal, el saqueador y rey destronado Gangplank es temido por todo el mundo. Alguna vez gobernó la ciudad portuaria de Aguasturbias y aunque su reino terminó, hay quienes creen que esto solo lo hizo más peligroso."

var div1 = document.getElementById("div1");
div1.parentNode.insertBefore(nuevoelemento, div1);
}

document.getElementById("boton").addEventListener("click", agregarnuevoelemento);

