import { traerPersonajes } from "../API/api.js"
import { mostrarPersonajes, borrarTarjetas } from "../lib/manejopers.js"
import {habilitaDeshabilitaBoton} from "../lib/controles.js"

//const contenedor=document.getElementById('CONTENEDOR');
const siguiente=document.getElementById('siguiente');
const anterior=document.getElementById('anterior');



/*function mostrarPersonajes(objeto){
  let tarjeta=[];
  for (let i = 0; i < objeto.results.length; i=i+1) {
       console.log(i);
       tarjeta[i]=document.createElement('div');
       tarjeta[i].classList.add('card');
       tarjeta[i].style.width = '10rem';
       const cuerpoTarjeta=document.createElement('div');
       cuerpoTarjeta.classList.add('card-body');
       const informacionTarjeta=document.createElement('p');
       informacionTarjeta.classList.add('card-text');
       const imagen=document.createElement('img');
       imagen.classList.add('card-img-top');
       cuerpoTarjeta.appendChild(imagen);
       cuerpoTarjeta.appendChild(informacionTarjeta);
       tarjeta[i].appendChild(cuerpoTarjeta);
       imagen.src=objeto.results[i].image
       informacionTarjeta.textContent=objeto.results[i].name;
       contenedor.appendChild(tarjeta[i]);
  }  
}*/

/*function borrarTarjetas(){
          contenedor.innerHTML="";
}*/

/*function habilitaDeshabilitaBoton(estado,boton){
  if (estado==true){
                boton.disabled=false;
                   }
  if (estado==false){
                boton.disabled=true;
                    }                 

}*/

let urlPersonajes="https://rickandmortyapi.com/api/character?page=1";


let personajes= await traerPersonajes(urlPersonajes);
habilitaDeshabilitaBoton(false,anterior);
//console.log(personajes);
mostrarPersonajes(personajes);
//console.log(personajes.info.next)

siguiente.addEventListener('click', async()=>{
    if (personajes.info.next!=null){
      personajes= await traerPersonajes(personajes.info.next);
      //console.log(personajes.info.next);
      borrarTarjetas();
      mostrarPersonajes(personajes);
      if (personajes.info.next==null){
               //console.log("****************************entro");
               habilitaDeshabilitaBoton(false,siguiente);
                                     }
      if (personajes.info.prev!=null){
               habilitaDeshabilitaBoton(true,anterior);
                                     }
                                  } else {
                                     habilitaDeshabilitaBoton(false,siguiente);
                                         }
})


anterior.addEventListener('click', async()=>{
    if (personajes.info.prev!=null){
      personajes= await traerPersonajes(personajes.info.prev);
      //console.log(personajes.info.prev);
      borrarTarjetas();
      mostrarPersonajes(personajes);
      if (personajes.info.prev==null){
                    habilitaDeshabilitaBoton(false,anterior);
                              }
      if (personajes.info.next!==null){
                          habilitaDeshabilitaBoton(true,siguiente);
                                     }
                                   } else {
                                       habilitaDeshabilitaBoton(false,anterior);
                                          }
})

