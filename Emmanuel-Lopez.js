let video = document.getElementById("video");
let reproducir = document.getElementById("boton");
let boton = document.getElementById("boton");

let age, nombre, apellido;



function reproduce(nombre){
    boton.style.display = "block";
    boton.style.width = "95%";
    boton.innerHTML = `Felicidades ${nombre} eres todo un crack y por ello haz ganado esta recompenza`;
    reproducir.addEventListener('click',()=>{
        boton.innerHTML = `Alaba a Ricardo papi dios Milos`;
        video.style.display = "block";
        video.play();
    });
}

    nombre = prompt("ingresa tu nombre crack");
    apellido = prompt("ingresa tu apellido pana");
    nombre = nombre +" " + apellido;

do {
    age = parseInt(prompt("ingresa tu edad"));
    if(age < 18 ){
        alert("¿como que tu edad es menor a 18? Ingrese su edad real joton XD");
    }
    else if(age >= 18){
        alert("muy bien crack adelante");
        reproduce(nombre);
    }
    
} while (age < 18);





