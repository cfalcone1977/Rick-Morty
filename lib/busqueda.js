
import {mostrarPersonajes, borrarTarjetas, contenedor} from "../lib/manejopers.js"
import {habilitaDeshabilitaBoton} from "../lib/controles.js"
import { urlPersonajes, personajes, inputBuscar } from "../scripts/index.js";


const aceptarBusqueda=document.getElementById('aceptarBusqueda');
const paginaP="";

export function BuscarPorNombre(){
aceptarBusqueda.addEventListener('click', async()=>{
                            borrarTarjetas();
                            habilitaDeshabilitaBoton(false,anterior);
                            habilitaDeshabilitaBoton(true,siguiente);  
                            console.log(inputBuscar.value);
                            paginaP=`https://rickandmortyapi.com/api/character/?name=${inputBuscar.value}`;
                            personajes= await traerPersonajes(paginaP);
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
}