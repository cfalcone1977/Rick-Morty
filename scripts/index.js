import { traerPersonajes } from "../API/api.js"
import { mostrarPersonajes, borrarTarjetas, contenedor } from "../lib/manejopers.js"
import {habilitaDeshabilitaBoton} from "../lib/controles.js"



const siguiente=document.getElementById('siguiente');
const anterior=document.getElementById('anterior');
const inputBuscar=document.getElementById('busqueda');
const aceptarBusqueda=document.getElementById('aceptarBusqueda');

const filtroGeneral=document.getElementById('filtradoGeneral');

const filtroEstadoVivo=document.getElementById('estadoVivo');
const filtroEstadoMuerto=document.getElementById('estadoMuerto');
const filtroEstadoDesconocido=document.getElementById('estadoDesconocido');

const generoFemenino=document.getElementById('generoFemenino');
const generoMasculino=document.getElementById('generoMasculino');
const generoSingenero=document.getElementById('generoSingenero');
const generoDesconocido=document.getElementById('generoDesconocido');

let STATUS="";
let GENERO="";

filtroEstadoVivo.disabled=true;
filtroEstadoMuerto.disabled=true;
filtroEstadoDesconocido.disabled=true;
aceptarBusqueda.disabled=true;

generoFemenino.disabled=true;
generoMasculino.disabled=true;
generoSingenero.disabled=true;
generoDesconocido.disabled=true;




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
    urlPersonajes=`https://rickandmortyapi.com/api/character/?${STATUS}`;
        } else {
              urlPersonajes=`https://rickandmortyapi.com/api/character/?${STATUS}&${GENERO}`;
               }
  personajes= await traerPersonajes(urlPersonajes);
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
    urlPersonajes=`https://rickandmortyapi.com/api/character/?${STATUS}`;
        } else {
              urlPersonajes=`https://rickandmortyapi.com/api/character/?${STATUS}&${GENERO}`;
               }
  personajes= await traerPersonajes(urlPersonajes);
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
              urlPersonajes=`https://rickandmortyapi.com/api/character/?${STATUS}`;
                  } else {
                        urlPersonajes=`https://rickandmortyapi.com/api/character/?${STATUS}&${GENERO}`;
                         }
  personajes= await traerPersonajes(urlPersonajes);
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
                            urlPersonajes="https://rickandmortyapi.com/api/character?page=1";
                            personajes= await traerPersonajes(urlPersonajes);
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
             urlPersonajes=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                console.log(`entro en FEMENINO + STATUS"  ${STATUS}`);
                urlPersonajes=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
personajes= await traerPersonajes(urlPersonajes);
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
             urlPersonajes=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                console.log(`entro en FEMENINO + STATUS"  ${STATUS}`);
                urlPersonajes=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
personajes= await traerPersonajes(urlPersonajes);
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
             urlPersonajes=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                console.log(`entro en FEMENINO + STATUS"  ${STATUS}`);
                urlPersonajes=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
personajes= await traerPersonajes(urlPersonajes);
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
             urlPersonajes=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                console.log(`entro en FEMENINO + STATUS"  ${STATUS}`);
                urlPersonajes=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
personajes= await traerPersonajes(urlPersonajes);
if (personajes.info.pages==1){
                    habilitaDeshabilitaBoton(false,siguiente);  
                             }                   
mostrarPersonajes(personajes);
console.log(personajes.info.next)    
})

inputBuscar.addEventListener('input',async ()=>{
   console.log(inputBuscar.value);
   if (inputBuscar.value!=""){
                           aceptarBusqueda.disabled=false;
                           inputBuscar.value = inputBuscar.value.toLowerCase().replace(/[^a-z]/g, '');
                             } else {
                              aceptarBusqueda.disabled=true;
                              borrarTarjetas();
                              urlPersonajes="https://rickandmortyapi.com/api/character?page=1";
                              personajes= await traerPersonajes(urlPersonajes);
                              habilitaDeshabilitaBoton(true,siguiente); 
                              habilitaDeshabilitaBoton(false,anterior);
                              mostrarPersonajes(personajes);
                                    }
})

aceptarBusqueda.addEventListener('click',async ()=>{
                            borrarTarjetas();
                            habilitaDeshabilitaBoton(false,anterior);
                            habilitaDeshabilitaBoton(true,siguiente);  
                            console.log(inputBuscar.value);
                            urlPersonajes=`https://rickandmortyapi.com/api/character/?name=${inputBuscar.value}`;
                            personajes= await traerPersonajes(urlPersonajes);
                            console.log(personajes);
                            if (!personajes.error){
                                if (personajes.info.pages==1){
                                               habilitaDeshabilitaBoton(false,siguiente);  
                                                             }                            
                                mostrarPersonajes(personajes);
                                                        } else {
                                                          habilitaDeshabilitaBoton(false,siguiente);  
                                                          habilitaDeshabilitaBoton(false,anterior); 
                                                          const mensaje=document.createElement('h2');
                                                          mensaje.textContent="NO HAY PERSONAJES CON ESE NOMBRE!!!";
                                                          contenedor.appendChild(mensaje);
                                                          console.log("no hay personajes con ese nombre!!!");
                                                               }
                
})

//evento escucha mouse pasando por las diferentes borrarTarjetas
/*document.addEventListener('mouseover', ()=>{
    let dondeEstaAhora=event.target;
    console.log(dondeEstaAhora);
    //document.getElementById('elemento-actual').textContent=`El mouse actualmente esta sobre: ${dondeEstaAhora.tagName}`;
})
console.log();*/


