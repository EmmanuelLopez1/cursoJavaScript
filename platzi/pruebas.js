const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";
const peopleUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1)}`;
const opts = { crossDomain: true };
let ids = [1,2,3,4,5,6,7];

let promesas = ids.map( id => character(id) )
Promise.all(promesas)
    .then(params => {
        for(let i in params){
            console.log(params[i].name)
        }
    })
    .catch(onError)

function peopleResponse(data) {
  console.log(`Hola yo soy ${data.name}`);
}

function character(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
    $.get(url, opts, function (data) {
      resolve(data);
    }).fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`sucedio un error al obtener el personaje ${id}`);
}

// character(1)
//   .then(data => {
//     console.log(`El personaje 1 es ${data.name}`);
//     return character(2);
//   })
//   .catch(onError);
