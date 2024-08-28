function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo__mensaje_encriptado");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let botonCopiar = document.getElementById("botonCopiar");
    let resultado = document.getElementById("texto__resultado");
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");


        if(texto !== txt){
            alert("No se permiten caracterés especiales");
            // Vuelve al estado normal
            muñeco.src = "./Imagenes/Muñeco.png"; // Ajusta la ruta según sea necesario
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
            document.getElementById("resultado").value = "";
        }
        else if(texto !== texto.toLowerCase()){
            alert("No se permiten textos en mayuscula");
            // Vuelve al estado normal
            muñeco.src = "./Imagenes/Muñeco.png"; // Ajusta la ruta según sea necesario
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
            document.getElementById("resultado").value = "";
        }
    let textoCifrado = texto
                            .replace(/e/gi, "enter")
                            .replace(/i/gi, "imes")
                            .replace(/a/gi, "ai")
                            .replace(/o/gi, "ober")
                            .replace(/u/gi, "ufat");

if (texto.length != 0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "";
    parrafo.textContent = "";
    resultado.textContent = textoCifrado;
    muñeco.style.display = "none";
    botonCopiar.style.display = "block";
    texto__resultado.style.display = "flex";
    document.getElementById("texto").value = "";
    // muñeco.src = "./Imagenes/Encriptado.png";
}
else{
    muñeco.src = "./Imagenes/Texto_incorrecto.png"
    tituloMensaje.textContent = "¡Escribe el texto correctamente, por favor!";
    parrafo.textContent = "";
    alert("Debes ingresar texto correcto");

     // Espera 2 segundos antes de volver al estado normal
     await delay(3000);

     // Vuelve al estado normal
     muñeco.src = "./Imagenes/Muñeco.png"; // Ajusta la ruta según sea necesario
     tituloMensaje.textContent = "Ningún mensaje fue encontrado";
     parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
}
}
async function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo__mensaje_encriptado");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let botonCopiar = document.getElementById("botonCopiar");
    let resultado = document.getElementById("texto__resultado");

    let textoCifrado = texto
                    .replace(/enter/gi, "e")
                    .replace(/imes/gi, "i")
                    .replace(/ai/gi, "a")
                    .replace(/ober/gi, "o")
                    .replace(/ufat/gi, "u");

if (texto.length != 0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        resultado.textContent = textoCifrado;
        document.getElementById("texto").value = "";

        // muñeco.src = "./Imagenes/Encriptado.png"; }
}
    else{
      muñeco.src = "./Imagenes/Texto_incorrecto.png"
      tituloMensaje.textContent = "¡Escribe el texto correcto a desencriptar!";
     parrafo.textContent = "";
      alert("Debes ingresar texto correcto");
                    
          // Espera 2 segundos antes de volver al estado normal
         await delay(3000);
                    
         // Vuelve al estado normal
         muñeco.src = "./Imagenes/Muñeco.png"; // Ajusta la ruta según sea necesario
         tituloMensaje.textContent = "Ningún mensaje fue encontrado";
         parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
     }

}
const botonCopiar = document.getElementById("botonCopiar");
botonCopiar.addEventListener("click", copiar = () => {
var contenido = document.getElementById("texto__resultado").textContent;
navigator.clipboard.writeText(contenido);
})
