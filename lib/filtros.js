import { traerPersonajes } from "../API/api.js"
import { mostrarPersonajes, borrarTarjetas, contenedor, overImagenes } from "../lib/manejopers.js"
import {habilitaDeshabilitaBoton} from "../lib/controles.js"
import {personajes,siguiente, anterior} from "../scripts/index.js"

let filtroGeneral=document.getElementById('filtradoGeneral');

let filtroEstadoVivo=document.getElementById('estadoVivo');
let filtroEstadoMuerto=document.getElementById('estadoMuerto');
let filtroEstadoDesconocido=document.getElementById('estadoDesconocido');

let generoFemenino=document.getElementById('generoFemenino');
let generoMasculino=document.getElementById('generoMasculino');
let generoSingenero=document.getElementById('generoSingenero');
let generoDesconocido=document.getElementById('generoDesconocido');


/****INICIALIZANDO FILTROS***/
let STATUS="";
let GENERO="";
let urlPersonajesf="";

filtroEstadoVivo.disabled=true;
filtroEstadoMuerto.disabled=true;
filtroEstadoDesconocido.disabled=true;
//aceptarBusqueda.disabled=true;

generoFemenino.disabled=true;
generoMasculino.disabled=true;
generoSingenero.disabled=true;
generoDesconocido.disabled=true;
/****FIN INICIALIZANDO FILTROS***/


export async function FiltradoEstadoGenero (){

filtroEstadoVivo.addEventListener('click',async()=>{
  if (filtroEstadoVivo.checked){
             console.log("activo filtrado x Vivos");
             STATUS="status=alive";
                               } else {
                                 console.log("Desactivado filtrado x Vivos");
                                 STATUS="";
                                       }
  borrarTarjetas();
  habilitaDeshabilitaBoton(false,anterior);
  habilitaDeshabilitaBoton(true,siguiente);
  if (GENERO==""){
    urlPersonajesf=`https://rickandmortyapi.com/api/character/?${STATUS}`;
        } else {
              urlPersonajesf=`https://rickandmortyapi.com/api/character/?${STATUS}&${GENERO}`;
               }
  personajes= await traerPersonajes(urlPersonajesf);
  if (personajes.info.pages==1){
                 habilitaDeshabilitaBoton(false,siguiente);  
                               }        
  mostrarPersonajes(personajes);
  console.log(personajes.info.next)                                       
})

filtroEstadoMuerto.addEventListener('click',async ()=>{
   if (filtroEstadoMuerto.checked){
              console.log("activo filtrado x Muertos");
              STATUS="status=dead";
                                } else {
                                  console.log("Desactivado filtrado x Muertos");
                                  STATUS="";
                                        }
  borrarTarjetas();
  habilitaDeshabilitaBoton(false,anterior);
  habilitaDeshabilitaBoton(true,siguiente);                                      
  if (GENERO==""){
    urlPersonajesf=`https://rickandmortyapi.com/api/character/?${STATUS}`;
        } else {
              urlPersonajesf=`https://rickandmortyapi.com/api/character/?${STATUS}&${GENERO}`;
               }
  personajes= await traerPersonajes(urlPersonajesf);
  if (personajes.info.pages==1){
    habilitaDeshabilitaBoton(false,siguiente);  
                               }        
  mostrarPersonajes(personajes);
  console.log(personajes.info.next)                                       
})

filtroEstadoDesconocido.addEventListener('click',async ()=>{
  if (filtroEstadoDesconocido.checked){
             console.log("activo filtrado x Desconocidos");
             STATUS="status=unknown";
                               } else {
                                 console.log("Desactivado filtrado x Desconocidos");
                                 STATUS="";
                                       }
  borrarTarjetas();
  habilitaDeshabilitaBoton(false,anterior);
  habilitaDeshabilitaBoton(true,siguiente);
  if (GENERO==""){
              urlPersonajesf=`https://rickandmortyapi.com/api/character/?${STATUS}`;
                  } else {
                        urlPersonajesf=`https://rickandmortyapi.com/api/character/?${STATUS}&${GENERO}`;
                         }
  personajes= await traerPersonajes(urlPersonajesf);
  if (personajes.info.pages==1){
    habilitaDeshabilitaBoton(false,siguiente);  
                               }        
  mostrarPersonajes(personajes);
  console.log(personajes.info.next)                                                      
})

filtroGeneral.addEventListener('click',async()=>{
 if (filtroGeneral.checked){
                filtroEstadoVivo.disabled=false;
                filtroEstadoMuerto.disabled=false;
                filtroEstadoDesconocido.disabled=false;
                generoFemenino.disabled=false;
                generoMasculino.disabled=false;
                generoSingenero.disabled=false;
                generoDesconocido.disabled=false;
                           } else {
                            filtroEstadoVivo.checked=false;
                            filtroEstadoMuerto.checked=false;
                            filtroEstadoDesconocido.checked=false; 
                            filtroEstadoVivo.disabled=true;
                            filtroEstadoMuerto.disabled=true;
                            filtroEstadoDesconocido.disabled=true;

                            generoFemenino.checked=false;
                            generoMasculino.checked=false;
                            generoSingenero.checked=false;
                            generoDesconocido.checked=false;
                            generoFemenino.disabled=true;
                            generoMasculino.disabled=true;
                            generoSingenero.disabled=true;
                            generoDesconocido.disabled=true;
                            
                            STATUS="";
                            GENERO="";

                            borrarTarjetas();
                            habilitaDeshabilitaBoton(false,anterior);
                            habilitaDeshabilitaBoton(true,siguiente);
                            urlPersonajesf="https://rickandmortyapi.com/api/character?page=1";
                            personajes= await traerPersonajes(urlPersonajesf);
                            mostrarPersonajes(personajes);
                            console.log(personajes.info.next)  
                           }

})

generoFemenino.addEventListener('click',async()=>{
  if (generoFemenino.checked){
    console.log("activo filtrado x Femenino");
    GENERO="gender=female";
                      } else {
                        console.log("Desactivado filtrado x Muertos");
                        GENERO="";
                              }
borrarTarjetas();
habilitaDeshabilitaBoton(false,anterior);
habilitaDeshabilitaBoton(true,siguiente);  
console.log(STATUS);
if (STATUS==""){                                   
             urlPersonajesf=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                console.log(`entro en FEMENINO + STATUS"  ${STATUS}`);
                urlPersonajesf=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
personajes= await traerPersonajes(urlPersonajesf);
if (personajes.info.pages==1){
                           habilitaDeshabilitaBoton(false,siguiente);  
                             }                   
mostrarPersonajes(personajes);
console.log(personajes.info.next)    
})

generoMasculino.addEventListener('click',async()=>{
  if (generoMasculino.checked){
    console.log("activo filtrado x Femenino");
    GENERO="gender=male";
                      } else {
                        console.log("Desactivado filtrado x Muertos");
                        GENERO="";
                              }
borrarTarjetas();
habilitaDeshabilitaBoton(false,anterior);
habilitaDeshabilitaBoton(true,siguiente);  
console.log(STATUS);
if (STATUS==""){                                   
             urlPersonajesf=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                console.log(`entro en FEMENINO + STATUS"  ${STATUS}`);
                urlPersonajesf=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
personajes= await traerPersonajes(urlPersonajesf);
if (personajes.info.pages==1){
                habilitaDeshabilitaBoton(false,siguiente);  
                             }                   
mostrarPersonajes(personajes);
console.log(personajes.info.next)    
})

generoSingenero.addEventListener('click',async()=>{
  if (generoSingenero.checked){
    console.log("activo filtrado x Femenino");
    GENERO="gender=genderless";
                      } else {
                        console.log("Desactivado filtrado x Muertos");
                        GENERO="";
                              }
borrarTarjetas();
habilitaDeshabilitaBoton(false,anterior);
habilitaDeshabilitaBoton(true,siguiente);  
console.log(STATUS);
if (STATUS==""){                                   
             urlPersonajesf=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                console.log(`entro en FEMENINO + STATUS"  ${STATUS}`);
                urlPersonajesf=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
personajes= await traerPersonajes(urlPersonajesf);
if (personajes.info.pages==1){
                     habilitaDeshabilitaBoton(false,siguiente);  
                             }                   
mostrarPersonajes(personajes);
console.log(personajes.info.next)    
})

generoDesconocido.addEventListener('click',async()=>{
  if (generoDesconocido.checked){
    console.log("activo filtrado x Femenino");
    GENERO="gender=unknown";
                      } else {
                        console.log("Desactivado filtrado x Muertos");
                        GENERO="";
                              }
borrarTarjetas();
habilitaDeshabilitaBoton(false,anterior);
habilitaDeshabilitaBoton(true,siguiente);  
console.log(STATUS);
if (STATUS==""){                                   
             urlPersonajesf=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                console.log(`entro en FEMENINO + STATUS"  ${STATUS}`);
                urlPersonajesf=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
personajes= await traerPersonajes(urlPersonajesf);
if (personajes.info.pages==1){
                    habilitaDeshabilitaBoton(false,siguiente);  
                             }                   
mostrarPersonajes(personajes);
console.log(personajes.info.next)    
})
}