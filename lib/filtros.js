import { traerPersonajes } from "../API/api.js";
import { filtroEstadoVivo, filtroEstadoMuerto, filtroEstadoDesconocido, filtroGeneral, inputBuscar } from "./variblesDOM.js";
import { generoFemenino, generoMasculino, generoSingenero, generoDesconocido, aceptarBusqueda, contenedor } from "./variblesDOM.js";
import { MenuEstados, MenuGeneros } from "./variblesDOM.js";
import { habilitaDeshabilitaBoton,habilitaTodosFiltros, deshabititaTodosFiltros } from "./controles.js";
import { borrarTarjetas, mostrarPersonajes } from "./manejopers.js";

let STATUS="";
let GENERO="";

export async function FiltrarEstadoVivos(LISTAPERSONAJES,URL){
  if (filtroEstadoVivo.checked){
    STATUS="status=alive";
                      } else {
                        STATUS="";
                              }
borrarTarjetas();
habilitaDeshabilitaBoton(false,anterior);
habilitaDeshabilitaBoton(true,siguiente);
if (GENERO==""){
URL=`https://rickandmortyapi.com/api/character/?${STATUS}`;
} else {
     URL=`https://rickandmortyapi.com/api/character/?${STATUS}&${GENERO}`;
      }
LISTAPERSONAJES= await traerPersonajes(URL);
if (LISTAPERSONAJES.info.pages==1){
        habilitaDeshabilitaBoton(false,siguiente);  
                      }        
mostrarPersonajes(LISTAPERSONAJES);   
return LISTAPERSONAJES;
}


export async function FiltrarEstadoMuertos(LISTAPERSONAJES,URL){
   if (filtroEstadoMuerto.checked){
              STATUS="status=dead";
                                } else {
                                  STATUS="";
                                        }
  borrarTarjetas();
  habilitaDeshabilitaBoton(false,anterior);
  habilitaDeshabilitaBoton(true,siguiente);                                      
  if (GENERO==""){
    URL=`https://rickandmortyapi.com/api/character/?${STATUS}`;
        } else {
              URL=`https://rickandmortyapi.com/api/character/?${STATUS}&${GENERO}`;
               }
  LISTAPERSONAJES= await traerPersonajes(URL);
  if (LISTAPERSONAJES.info.pages==1){
    habilitaDeshabilitaBoton(false,siguiente);  
                               }        
  mostrarPersonajes(LISTAPERSONAJES);
  return LISTAPERSONAJES;                                      
}

export async function FiltrarEstadoDesconocidos(LISTAPERSONAJES,URL){
  if (filtroEstadoDesconocido.checked){
             STATUS="status=unknown";
                               } else {
                                 STATUS="";
                                       }
  borrarTarjetas();
  habilitaDeshabilitaBoton(false,anterior);
  habilitaDeshabilitaBoton(true,siguiente);
  if (GENERO==""){
              URL=`https://rickandmortyapi.com/api/character/?${STATUS}`;
                  } else {
                        URL=`https://rickandmortyapi.com/api/character/?${STATUS}&${GENERO}`;
                         }
  LISTAPERSONAJES= await traerPersonajes(URL);
  if (LISTAPERSONAJES.info.pages==1){
    habilitaDeshabilitaBoton(false,siguiente);  
                               }        
  mostrarPersonajes(LISTAPERSONAJES);
  return LISTAPERSONAJES;   

}

export async function FiltrarEstadoGeneral(LISTAPERSONAJES,URL){
if (filtroGeneral.checked){
  MenuEstados.style.display ='';
  MenuGeneros.style.display ='';
  habilitaTodosFiltros();
        } else {
         MenuEstados.style.display ='none';
         MenuGeneros.style.display ='none';
         deshabititaTodosFiltros();

         STATUS="";
         GENERO="";

         borrarTarjetas();
         habilitaDeshabilitaBoton(false,anterior);
         habilitaDeshabilitaBoton(true,siguiente);
         URL="https://rickandmortyapi.com/api/character?page=1";
         LISTAPERSONAJES= await traerPersonajes(URL);
         mostrarPersonajes(LISTAPERSONAJES);
         return LISTAPERSONAJES;  
        }
}

export async function GenerosFemeninos(LISTAPERSONAJES,URL){
  if (generoFemenino.checked){
    GENERO="gender=female";
                      } else {
                        GENERO="";
                              }
borrarTarjetas();
habilitaDeshabilitaBoton(false,anterior);
habilitaDeshabilitaBoton(true,siguiente);  
console.log(STATUS);
if (STATUS==""){                                   
             URL=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                URL=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
LISTAPERSONAJES= await traerPersonajes(URL);
if (LISTAPERSONAJES.info.pages==1){
                           habilitaDeshabilitaBoton(false,siguiente);  
                             }                   
mostrarPersonajes(LISTAPERSONAJES);
return LISTAPERSONAJES;
}

export async function GenerosMasculinos(LISTAPERSONAJES,URL){
  if (generoMasculino.checked){
    GENERO="gender=male";
                      } else {
                        GENERO="";
                              }
borrarTarjetas();
habilitaDeshabilitaBoton(false,anterior);
habilitaDeshabilitaBoton(true,siguiente);  
if (STATUS==""){                                   
             URL=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                URL=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
LISTAPERSONAJES= await traerPersonajes(URL);
if (LISTAPERSONAJES.info.pages==1){
                habilitaDeshabilitaBoton(false,siguiente);  
                             }                   
mostrarPersonajes(LISTAPERSONAJES);
return LISTAPERSONAJES;    
}

export async function GenerosSingeneros(LISTAPERSONAJES,URL){
  if (generoSingenero.checked){
    GENERO="gender=genderless";
                      } else {
                        GENERO="";
                              }
borrarTarjetas();
habilitaDeshabilitaBoton(false,anterior);
habilitaDeshabilitaBoton(true,siguiente);  
if (STATUS==""){                                   
             URL=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                URL=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
LISTAPERSONAJES= await traerPersonajes(URL);
if (LISTAPERSONAJES.info.pages==1){
                     habilitaDeshabilitaBoton(false,siguiente);  
                             }                   
mostrarPersonajes(LISTAPERSONAJES);
return LISTAPERSONAJES;
}

export async function GenerosDesconocidos(LISTAPERSONAJES,URL){
  if (generoDesconocido.checked){
    GENERO="gender=unknown";
                      } else {
                        GENERO="";
                              }
borrarTarjetas();
habilitaDeshabilitaBoton(false,anterior);
habilitaDeshabilitaBoton(true,siguiente);  
if (STATUS==""){                                   
             URL=`https://rickandmortyapi.com/api/character/?${GENERO}`;
              } else {
                URL=`https://rickandmortyapi.com/api/character/?${GENERO}&${STATUS}`;
                     }
LISTAPERSONAJES= await traerPersonajes(URL);
if (LISTAPERSONAJES.info.pages==1){
                    habilitaDeshabilitaBoton(false,siguiente);  
                             }                   
mostrarPersonajes(LISTAPERSONAJES);
return LISTAPERSONAJES;
}

export async function IngresoNombrePersonajes(LISTAPERSONAJES,URL){
   if (inputBuscar.value!=""){
                           aceptarBusqueda.disabled=false;
                           inputBuscar.value = inputBuscar.value.toLowerCase().replace(/[^a-z]/g, '');
                             } else {
                              aceptarBusqueda.disabled=true;

                              filtroGeneral.checked=false; 
                              
                              deshabititaTodosFiltros();
          
                              borrarTarjetas();
                              URL="https://rickandmortyapi.com/api/character?page=1";
                              LISTAPERSONAJES= await traerPersonajes(URL);
                              habilitaDeshabilitaBoton(true,siguiente); 
                              habilitaDeshabilitaBoton(false,anterior);
                              mostrarPersonajes(LISTAPERSONAJES);
                                    }
return LISTAPERSONAJES;                                  
}

export async function BotonAceptarBusqueda(LISTAPERSONAJES,URL){
  borrarTarjetas();
  habilitaDeshabilitaBoton(false,anterior);
  habilitaDeshabilitaBoton(true,siguiente);  
  URL=`https://rickandmortyapi.com/api/character/?name=${inputBuscar.value}`;
  LISTAPERSONAJES= await traerPersonajes(URL);
  if (!LISTAPERSONAJES.error){
      if (LISTAPERSONAJES.info.pages==1){
                     habilitaDeshabilitaBoton(false,siguiente);  
                                   }                            
      mostrarPersonajes(LISTAPERSONAJES);
                              } else {
                                habilitaDeshabilitaBoton(false,siguiente);  
                                habilitaDeshabilitaBoton(false,anterior); 
                                const mensaje=document.createElement('h2');
                                mensaje.textContent="NO HAY PERSONAJES CON ESE NOMBRE!!!";
                                contenedor.appendChild(mensaje);
                                     }
return LISTAPERSONAJES;                                     
}