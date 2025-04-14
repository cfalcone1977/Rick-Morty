import { traerPersonajes } from "../API/api.js";
import { mostrarPersonajes, overImagenes } from "../lib/manejopers.js";
import {SIGUIENTE, ANTERIOR, habilitaDeshabilitaBoton} from "../lib/controles.js";
import {siguiente, anterior, inputBuscar, aceptarBusqueda} from "../lib/variblesDOM.js";
import {filtroGeneral, filtroEstadoVivo, filtroEstadoMuerto, filtroEstadoDesconocido} from "../lib/variblesDOM.js";
import {FiltrarEstadoGeneral, GenerosFemeninos, GenerosMasculinos, GenerosSingeneros, GenerosDesconocidos } from "../lib/filtros.js";
import {generoFemenino, generoMasculino, generoSingenero, generoDesconocido} from "../lib/variblesDOM.js";
import { FiltrarEstadoVivos, FiltrarEstadoMuertos, FiltrarEstadoDesconocidos, IngresoNombrePersonajes} from "../lib/filtros.js";
import { BotonAceptarBusqueda } from "../lib/filtros.js";


let urlPersonajes="https://rickandmortyapi.com/api/character?page=1";
export let personajes= await traerPersonajes(urlPersonajes);

habilitaDeshabilitaBoton(false,anterior);
mostrarPersonajes(personajes);


siguiente.addEventListener('click', async()=>{
  personajes= await SIGUIENTE(personajes);
})

anterior.addEventListener('click', async()=>{
  personajes= await ANTERIOR(personajes);
})


filtroEstadoVivo.addEventListener('click', async() =>{
   personajes= await FiltrarEstadoVivos(personajes,urlPersonajes);
});


filtroEstadoMuerto.addEventListener('click', async() =>{
  personajes= await FiltrarEstadoMuertos(personajes,urlPersonajes);
});


filtroEstadoDesconocido.addEventListener('click', async() =>{
  personajes = await FiltrarEstadoDesconocidos(personajes,urlPersonajes);
});


filtroGeneral.addEventListener('click',async ()=>{
  personajes = await FiltrarEstadoGeneral(personajes,urlPersonajes);
});
  

generoFemenino.addEventListener('click',async()=>{
  personajes = await GenerosFemeninos(personajes,urlPersonajes);
})


generoMasculino.addEventListener('click',async()=>{
personajes = await GenerosMasculinos(personajes,urlPersonajes);
});


generoSingenero.addEventListener('click',async()=>{
personajes = await GenerosSingeneros(personajes,urlPersonajes);
});


generoDesconocido.addEventListener('click',async()=>{
  personajes = await GenerosDesconocidos(personajes,urlPersonajes);
})


inputBuscar.addEventListener('input',async ()=>{
personajes = await IngresoNombrePersonajes(personajes,urlPersonajes);
})


aceptarBusqueda.addEventListener('click',async ()=>{
personajes = await BotonAceptarBusqueda(personajes,urlPersonajes);
})

overImagenes();




