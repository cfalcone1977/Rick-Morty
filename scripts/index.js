import { traerPersonajes } from "../API/api.js"
const tarjetas=document.querySelectorAll('.card');
const siguiente=document.getElementById('siguiente');
const anterior=document.getElementById('anterior');


function mostrarPersonajes(objeto){
  //console.log(tarjetas.length);
  //console.log(tarjetas[0]);
  //console.log(objeto.results[0].image)
  for (let i = 0; i < tarjetas.length; i=i+1) {
    const imagen=document.createElement('img');
    imagen.src=objeto.results[i].image;
    tarjetas[i].appendChild(imagen);
  }
}

function borrarTarjetas(){
    for (let i = 0; i < tarjetas.length; i=i+1) {
        tarjetas[i].innerHTML="";
    }
}

function habilitaDeshabilitaBoton(estado,boton){
  if (estado==true){
                boton.disabled=false;
                   }
  if (estado==false){
                boton.disabled=true;
                    }                 

}

let urlPersonajes="https://rickandmortyapi.com/api/character?page=1";


let personajes= await traerPersonajes(urlPersonajes);
habilitaDeshabilitaBoton(false,anterior);
console.log(personajes);
console.log(tarjetas);
mostrarPersonajes(personajes);
console.log(personajes.info.next)

siguiente.addEventListener('click', async()=>{
    console.log("ENTRE")
    personajes= await traerPersonajes(personajes.info.next);
    console.log(personajes);
    borrarTarjetas();
    mostrarPersonajes(personajes);
    if (personajes.info.prev!=null){
                            habilitaDeshabilitaBoton(true,anterior);
                                   }

})


anterior.addEventListener('click', async()=>{
    if (personajes.info.prev!=null){
      personajes= await traerPersonajes(personajes.info.prev);
      console.log(personajes.info.prev);
      borrarTarjetas();
      mostrarPersonajes(personajes);
      if (personajes.info.prev==null){
                          habilitaDeshabilitaBoton(false,anterior);
                                     }
                                   } else {
                                       habilitaDeshabilitaBoton(false,anterior);
                                          }


})

