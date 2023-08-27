const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const ctn_text = document.getElementById("deceos");

boton1.addEventListener('click', () =>{
    ctn_text.style.top = 0;
});
boton2.addEventListener('click', () =>{
    ctn_text.style.top = "-200%";
});