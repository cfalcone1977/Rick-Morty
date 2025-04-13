export const contenedor=document.getElementById('CONTENEDOR');
export const ventanaModal=document.getElementById('ventanaModal');
export const cuerpoModal=document.getElementById('cuerpoModal');
export const botonCerrarModal=document.getElementById('cerrarModal');

export const MenuEstados=document.getElementById('menuEstados');
export const MenuGeneros=document.getElementById('menuGeneros');


export const siguiente=document.getElementById('siguiente');
export const anterior=document.getElementById('anterior');
export const inputBuscar=document.getElementById('busqueda');
export const aceptarBusqueda=document.getElementById('aceptarBusqueda');

export const filtroGeneral=document.getElementById('filtradoGeneral');
export const filtroEstadoVivo=document.getElementById('estadoVivo');
export const filtroEstadoMuerto=document.getElementById('estadoMuerto');
export const filtroEstadoDesconocido=document.getElementById('estadoDesconocido');

export const generoFemenino=document.getElementById('generoFemenino');
export const generoMasculino=document.getElementById('generoMasculino');
export const generoSingenero=document.getElementById('generoSingenero');
export const generoDesconocido=document.getElementById('generoDesconocido');

/****INICIALIZANDO FILTROS***/
MenuEstados.style.display='none';
MenuGeneros.style.display='none';
filtroEstadoVivo.disabled=true;
filtroEstadoMuerto.disabled=true;
filtroEstadoDesconocido.disabled=true;
aceptarBusqueda.disabled=true;

generoFemenino.disabled=true;
generoMasculino.disabled=true;
generoSingenero.disabled=true;
generoDesconocido.disabled=true;
/****FIN INICIALIZANDO FILTROS***/