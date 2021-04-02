/*window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 4,
        slidesToScroll: 2,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__before',
          next: '.carousel__next'
        }  
    })
})
*/

class lista{
  constructor(genero, noTarjetas, srcImg, canciones, autores){
    this.genero = genero;
    this.noTarjetas = noTarjetas;
    this.srcImg = srcImg;
    this.canciones = canciones;
    this.autores = autores;
    this.generarLista();
  }

  añadirElemento(elemento, nombre, padre, contenido, src){
    let nodo = document.createElement(elemento);
    if(contenido != undefined){
      nodo.innerHTML = contenido;
    }
    if(src != undefined){
      nodo.setAttribute("src", src)
    }
    nodo.setAttribute("class", nombre)
    padre.appendChild(nodo)
    return nodo
  }

  generarLista(){
    let main = document.querySelector(".main")
    let lista = this.añadirElemento("div", "lista", main)
    this.elementosLista(lista);
    console.log(main)
  }

  elementosLista(padre){
    this.añadirElemento("h2", "lista__titulo", padre, this.genero)
    this.añadirElemento("hr", "lista__separador", padre)
    let carousel = this.añadirElemento("div", "carousel", padre)
    let carouselCanciones  = this.añadirElemento("div", "carousel__canciones", carousel)
    this.elementosCarousel(carouselCanciones);
  }

  elementosCarousel(padre){
    let buttonLeft = this.añadirElemento("button", "carousel__before", padre)
    this.añadirElemento("i", "fas fa-chevron-left", buttonLeft)
    for(let i = 0; i < this.noTarjetas;i++){
      this.cards(padre,i)  
    }
    let buttonRigth = this.añadirElemento("button", "carousel__next", padre);
    this.añadirElemento("i", "fas fa-chevron-right", buttonRigth)
  }

  cards(padre,i){
    console.log(padre)
      let card = this.añadirElemento("div", "card", padre)
      this.crearTarjeta(card,i)
      return card
  }

  crearTarjeta(padre, position){
    this.añadirElemento("img", "card-img-top", padre, undefined, this.srcImg[position])
    let cardbody = this.añadirElemento("div", "card-body", padre)
    this.añadirElemento("h5", "card-title", cardbody, this.canciones[position])
    this.añadirElemento("p", "card-text", cardbody, this.autores[position])
    this.reproductor(padre)
  }

  reproductor(padre){
    let play = this.añadirElemento("button", `card__play`, padre);
    this.añadirElemento("i", "fas fa-play", play)
  }

}

let rutas = ["img/1.png","img/1.png"]
let canciones = ["tal vez", "adan y eva"]
let autores = ["paulo londra", "paulo londra"]

new lista("Rock", 2, rutas, canciones, autores);
new lista("Pop", 2, rutas, canciones, autores)


