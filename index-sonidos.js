console.log("clicksound.js conectado");


const boton = document.getElementById("click1");
const sonido = new Audio("click1.mp3");

boton.addEventListener("click", () => {
    sonido.currentTime = 0;
    sonido.play();
});