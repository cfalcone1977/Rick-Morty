
import { traerPersonajes } from "../../API/api.js";
import {mostrarPersonajes, borrarTarjetas, contenedor} from "./manejopers.js"
import {habilitaDeshabilitaBoton} from "./controles.js"
import {inputBuscar, siguiente, anterior, filtroGeneral, filtroEstadoVivo, filtroEstadoMuerto, filtroEstadoDesconocido, generoFemenino, generoMasculino, generoSingenero, generoDesconocido} from "../scripts/index.js";
const aceptarBusqueda=document.getElementById('aceptarBusqueda');

let URL="";

export async function IngresoBusqueda(PERSONAJES){
   if (inputBuscar.value!=""){
                           aceptarBusqueda.disabled=false;
                           inputBuscar.value = inputBuscar.value.toLowerCase().replace(/[^a-z]/g, '');
                             } else {
                              aceptarBusqueda.disabled=true;

                              filtroGeneral.checked=false; 
                           
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

                              borrarTarjetas();
                              URL="https://rickandmortyapi.com/api/character?page=1";
                              let PERSONAJES= await traerPersonajes(URL);
                              habilitaDeshabilitaBoton(true,siguiente); 
                              habilitaDeshabilitaBoton(false,anterior);
                              mostrarPersonajes(PERSONAJES);
                                    }
}


export async function BuscarPorNombre(PERSONAJES){
                            borrarTarjetas();
                            habilitaDeshabilitaBoton(false,anterior);
                            habilitaDeshabilitaBoton(true,siguiente);  
                            console.log(inputBuscar.value);
                            URL=`https://rickandmortyapi.com/api/character/?name=${inputBuscar.value}`;
                            PERSONAJES= await traerPersonajes(URL);
                            console.log(PERSONAJES);
                            if (!PERSONAJES.error){
                                if (PERSONAJES.info.pages==1){
                                               habilitaDeshabilitaBoton(false,siguiente);  
                                                             }                            
                                mostrarPersonajes(PERSONAJES);
                                                        } else {
                                                          habilitaDeshabilitaBoton(false,siguiente);  
                                                          habilitaDeshabilitaBoton(false,anterior); 
                                                          const mensaje=document.createElement('h2');
                                                          mensaje.textContent="NO HAY PERSONAJES CON ESE NOMBRE!!!";
                                                          contenedor.appendChild(mensaje);
                                                          console.log("no hay personajes con ese nombre!!!");
                                                               }
                
}
