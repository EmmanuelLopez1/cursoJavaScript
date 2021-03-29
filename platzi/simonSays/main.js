let red, blue, orange, green, start; //variables del DOM
let puntaje = 0,
  gameStart = false;
const ULTIMO_NIVEL = 10;

red = seleccionarElemento("red");
blue = seleccionarElemento("blue");
orange = seleccionarElemento("orange");
green = seleccionarElemento("green");

function seleccionarElemento(id) {
  let element = document.getElementById(id);
  return element;
}

class Juego {
  constructor() {
    this.comenzarJuego();
  }

  comenzarJuego() {
    this.start = document.getElementById("start");
    this.start.addEventListener("click", () => {
      this.siguienteNivel = this.siguienteNivel.bind(this)
      this.numeros = this.numeroAleatorio();
      this.nivel = 1;
      this.colors = {
        red,
        blue,
        orange,
        green,
      };
      this.siguienteNivel();
      this.start.style.display = "none";
    });
  }

  siguienteNivel() {
    this.subnivel = 0;
    console.log(this.subnivel + "subnivel")
    this.iluminarSecuencia();
    this.agregarEventosClick();
  }
  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      let color = this.transformarNumeroColor(this.numeros[i]);
      setTimeout(() => {
        this.iluminarColor(color);
      }, i * 2000);
    }
  }
  transformarNumeroColor(num) {
    switch (num) {
      case 1:
        return "red";
      case 2:
        return "blue";
      case 3:
        return "orange";
      case 4:
        return "green";
      default:
        break;
    }
  }
  transformarColorNumero(color) {
    switch (color) {
      case "red":
        return 1;
      case "blue":
        return 2;
      case "orange":
        return 3;
      case "green":
        return 4;
    }
  }
  iluminarColor(color) {
    this.colors[color].classList.add(color + "ligth");
    setTimeout(() => {
      this.colors[color].classList.remove(color + "ligth");
    }, 1000);
  }
  numeroAleatorio() {
    let numeros = [1,1,2,4,3,2,2,1,2,3];
    /*for (let i = 0; i < 10; i++) {
      let numero = Math.random() * (4 - 1) + 1;
      console.log(numero.toFixed(0))
      numeros[i] = parseInt(numero.toFixed(0));
    }
    */
    
    return numeros;
  }
  agregarEventosClick() {
    this.colors["red"].addEventListener("click",this.elegirColor.bind(this));
    this.colors["blue"].addEventListener("click",this.elegirColor.bind(this));
    this.colors["orange"].addEventListener("click",this.elegirColor.bind(this));
    this.colors["green"].addEventListener("click",this.elegirColor.bind(this));
    
  }
  eliminarEventosClick() {
    this.colors["red"].removeEventListener("click",this.elegirColor.bind(this));
    this.colors["blue"].removeEventListener("click",this.elegirColor.bind(this));
    this.colors["orange"].removeEventListener("click",this.elegirColor.bind(this));
    this.colors["green"].removeEventListener("click",this.elegirColor.bind(this));
  }
  elegirColor(ev) {
    this.iluminarColor(ev.target.dataset.color)
    const NOMBRECOLOR = ev.target.dataset.color;
    const a = this.transformarColorNumero(NOMBRECOLOR);

    if (a === this.numeros[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.eliminarEventosClick();
        if (this.nivel === ULTIMO_NIVEL + 1) {
          //gano
        } else {
          setTimeout(this.siguienteNivel, 1500);
        }
      }
    } else {
      
    }
  }
}  

let game = new Juego();
