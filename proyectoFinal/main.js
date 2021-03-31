window.addEventListener('load',function(){
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

class lista{
  constructor(genero, autor, cancion){
    this.genero = genero;
    this.autor = autor;
    this.cancion = cancion;
    this.crearLista();
  }
  saludar(){
    alert("hello")
  }

  crearLista(){
    let main = document.querySelector(".main");
    let lista = document.createElement("div")
    lista.setAttribute("class", "lista")
    this.añadirElemento("h2",  "lista__titulo", lista, this.genero);
    this.añadirElemento("hr", "lista__separador", lista)
    this.carousel = this.añadirElemento("div", "carousel", lista)
    this.crearCarousel();
    main.appendChild(lista)
    
  }

  añadirElemento(elemento, nombre, padre, contenido){
    let nodo = document.createElement(elemento);
    if(contenido != undefined){
      nodo.innerHTML = contenido;
    }
    nodo.setAttribute("class", nombre)
    padre.appendChild(nodo)
    return nodo
  }

  crearCarousel(){
    let content = this.añadirElemento("div", "carousel__canciones", this.carousel)
    this.añadirBotones("fas", "fa-chevron-left", "carousel__before", content);
    let carousel__lista = this.añadirElemento("div", "carousel__lista",  content)
    this.crearTarjetas(carousel__lista);
    this.añadirBotones("fas", "fa-chevron-left", "carousel__next", content);
  }

  añadirBotones(class1, class2, classPadre, padre){
    let boton = document.createElement("button");
    boton.setAttribute("class", classPadre)
    let hijo = document.createElement("i");
    hijo.setAttribute("class", `${class1} ${class2}`)
    boton.appendChild(hijo)
    padre.appendChild(boton)
  }
  
  crearTarjetas(carousel__lista){
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    this.crearImagenes(card,"img/1.png")
    this.cardBody(card,"tal vez", "paulo Londra");
    carousel__lista.appendChild(card)
    
  }

  crearImagenes(card, src){
    let img = document.createElement("img");
    img.setAttribute("src", src)
    img.setAttribute("class", "card-img-top");
    card.appendChild(img)

  }

  cardBody(card,cancion, autor){
    let cardBody = document.createElement("div"); 
    cardBody.setAttribute("class", "card-body");
    this.añadirElemento("h5", "card-title", cardBody, cancion);
    this.añadirElemento("p", "card-text", cardBody, autor)
    card.appendChild(cardBody)
    this.añadirBotones("fas", "fa-play", "card__play", card)
    return cardBody
  }
  

}

new lista("Rock");

