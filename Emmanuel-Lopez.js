/*let estado = parseInt(prompt("¿Como te sientes el día de hoy?: 1 alegre, 2 triste, 3 dolido, 4 muy dolido y 5 buchon"));
estadoEmocional(estado);

function seleccionBoton(name, ruta) {
    return document.getElementById(name).addEventListener("click",()=>{
        let video = document.getElementById("video");
        console.log(video)
        video.setAttribute("src", ruta);
        video.style.display = "block";
        
    });    
}

function estadoEmocional(estado) {
    switch (estado) {
        case 1:
            mostrarVideo("alegre", "Asi me gusta crack que este al 100 diario");
            break;
        case 2:
            mostrarVideo("triste", "¿Como vas a estar triste? Aquie esta ricardo milos para alegra tu dia.");
            break;
        case 3: 
            mostrarVideo("dolido", "Echele aqui lo acompaña el buen jose Alfredo jimenez en su pena.");
            break;
        case 4:
            mostrarVideo("muyDolido", "Que mal viejo, no hay cancion que esta para pistear de dolor.");
            break;
        case 5:
            mostrarVideo("buchon", "Subale a la musica pariente,  !FIERR0¡");
            break;
        default:
            alert("Ingresa un valor valido nigga");
            break;
    }
}

function mostrarVideo(btn, leyenda) {
    let boton = document.getElementsByClassName(btn);
    console.log(boton[0])
    boton[0].style.display = "block";
    boton[0].innerHTML = leyenda;
    boton[0].style.width = "auto";
}

let alegre = seleccionBoton("alegre", "./videos/partyRock.mp4");
let triste = seleccionBoton("triste", "./videos/Recompensa.mp4");
let dolido = seleccionBoton("dolido", "./videos/el ultimo trago.mp40");
let muyDolido = seleccionBoton("muy dolido", "./videos/me canse de rogarle.mp4");
let buchon = seleccionBoton("buchon", "./videos/que caro estoy pagando.webm");
*/



