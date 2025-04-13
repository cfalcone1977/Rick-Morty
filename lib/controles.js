import {filtroEstadoVivo, filtroEstadoMuerto, filtroEstadoDesconocido} from "./variblesDOM.js";
import { siguiente, anterior } from "./variblesDOM.js";
import {generoFemenino, generoMasculino, generoSingenero, generoDesconocido} from "./variblesDOM.js";
import { mostrarPersonajes,borrarTarjetas } from "./manejopers.js";
import { traerPersonajes } from "../API/api.js";


export function habilitaDeshabilitaBoton(estado,boton){
    if (estado==true){
                  boton.disabled=false;
                     }
    if (estado==false){
                  boton.disabled=true;
                      }                 
  }

export function habilitaTodosFiltros(){
    filtroEstadoVivo.disabled=false;
    filtroEstadoMuerto.disabled=false;
    filtroEstadoDesconocido.disabled=false;
    generoFemenino.disabled=false;
    generoMasculino.disabled=false;
    generoSingenero.disabled=false;
    generoDesconocido.disabled=false;
}

export function deshabititaTodosFiltros(){
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
}

export async function SIGUIENTE(LISTAPERSONAJES){
    if (LISTAPERSONAJES.info.next!=null){
        LISTAPERSONAJES= await traerPersonajes(LISTAPERSONAJES.info.next);
        borrarTarjetas();
        mostrarPersonajes(LISTAPERSONAJES);
        if (LISTAPERSONAJES.info.next==null){
                 habilitaDeshabilitaBoton(false,siguiente);
                                       }
        if (LISTAPERSONAJES.info.prev!=null){
                 habilitaDeshabilitaBoton(true,anterior);
                                       }
                                    } else {
                                       habilitaDeshabilitaBoton(false,siguiente);
                                           }
    return (LISTAPERSONAJES);                                       
}

export async function ANTERIOR(LISTAPERSONAJES){
    if (LISTAPERSONAJES.info.prev!=null){
        LISTAPERSONAJES = await traerPersonajes(LISTAPERSONAJES.info.prev);
        borrarTarjetas();
        mostrarPersonajes(LISTAPERSONAJES);
        if (LISTAPERSONAJES.info.prev==null){
                      habilitaDeshabilitaBoton(false,anterior);
                                }
        if (LISTAPERSONAJES.info.next!==null){
                            habilitaDeshabilitaBoton(true,siguiente);
                                       }
                                     } else {
                                         habilitaDeshabilitaBoton(false,anterior);
                                            }
    return (LISTAPERSONAJES);                                        
}