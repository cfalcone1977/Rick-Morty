import { contenedor, ventanaModal, cuerpoModal, botonCerrarModal } from "./variblesDOM.js";     

function crearModalDetalle(imagen,nombre,estado,genero,especie,tipo){
  const imagenModal=document.createElement('img');
  imagenModal.classList.add('imagenModal');
  const nombreModal=document.createElement('p');
  const estadoModal=document.createElement('p');
  const generoModal=document.createElement('p');
  const especieModal=document.createElement('p');
  const tipoModal=document.createElement('p');
  imagenModal.src=imagen.src;
  nombreModal.innerHTML=`<strong>Nombre:</strong>   `+nombre.textContent;
  estadoModal.innerHTML=`<strong>Estado:</strong>   `+estado.textContent;
  generoModal.innerHTML=`<strong>Genero:</strong>   `+genero.textContent;
  especieModal.innerHTML=`<strong>Especie:</strong> `+especie.textContent;
  console.log(tipo.textContent);
  if (tipo.textContent===""){
                           tipo.textContent="none";
                           }
  tipoModal.innerHTML=`<strong>Tipo:</strong>    `+tipo.textContent;
  cuerpoModal.appendChild(imagenModal);
  cuerpoModal.appendChild(nombreModal);
  cuerpoModal.appendChild(estadoModal);
  cuerpoModal.appendChild(generoModal);
  cuerpoModal.appendChild(especieModal);
  cuerpoModal.appendChild(tipoModal);
  ventanaModal.appendChild(cuerpoModal);
}

function borrarModal(){
       cuerpoModal.innerHTML="";
}

export function mostrarPersonajes(objeto){
    for (let i = 0; i < objeto.results.length; i=i+1) {
         //***CREA ELEMENTOS TARJETA***
         const tarjeta=document.createElement('div');
         tarjeta.classList.add('card');
         tarjeta.style.width = '12rem';
         const cuerpoTarjeta=document.createElement('div');
         cuerpoTarjeta.classList.add('card-body');
         const nombrePersonajeTarjeta=document.createElement('p');
         nombrePersonajeTarjeta.classList.add('card-text');

         const estadoPersonajeTarjeta=document.createElement('p');  // NO USO
         estadoPersonajeTarjeta.classList.add('card-text');         // NO USO
         const generoPersonajeTarjeta=document.createElement('p');  // NO USO
         generoPersonajeTarjeta.classList.add('card-text');         // NO USO
         const especiePersonajeTarjeta=document.createElement('p'); // NO USO
         especiePersonajeTarjeta.classList.add('card-text');        // NO USO
         const tipoPersonajeTarjeta=document.createElement('p');    // NO USO
         tipoPersonajeTarjeta.classList.add('card-text');           // NO USO         
         const imagen=document.createElement('img');
         imagen.classList.add('card-img-top');
         imagen.classList.add('card');
         cuerpoTarjeta.appendChild(imagen);
         cuerpoTarjeta.appendChild(nombrePersonajeTarjeta);

         tarjeta.appendChild(cuerpoTarjeta);
         imagen.src=objeto.results[i].image
         nombrePersonajeTarjeta.innerHTML=`<strong>${objeto.results[i].name}</strong>`;
         //nombrePersonajeTarjeta.textContent=objeto.results[i].name;
         estadoPersonajeTarjeta.textContent=objeto.results[i].status;
         generoPersonajeTarjeta.textContent=objeto.results[i].gender;
         especiePersonajeTarjeta.textContent=objeto.results[i].species;
         tipoPersonajeTarjeta.textContent=objeto.results[i].type;
         contenedor.appendChild(tarjeta);

         tarjeta.addEventListener('click',()=>{
          console.log(imagen);
          console.log(nombrePersonajeTarjeta.textContent);
          console.log(estadoPersonajeTarjeta.textContent);         
          console.log(generoPersonajeTarjeta.textContent);
          console.log(especiePersonajeTarjeta.textContent);  
          console.log(tipoPersonajeTarjeta.textContent);
          crearModalDetalle(imagen,nombrePersonajeTarjeta,estadoPersonajeTarjeta,generoPersonajeTarjeta,especiePersonajeTarjeta,tipoPersonajeTarjeta);
          ventanaModal.showModal();
          ventanaModal.addEventListener('cancel',()=>{
              borrarModal();
          });
          botonCerrarModal.addEventListener('click',()=>{
                                   borrarModal();
                                   ventanaModal.close()});
          })    
    }  
  }

export function borrarTarjetas(){
    contenedor.innerHTML="";
}

//evento escucha mouse pasando por las diferentes imagenes y aumenta su tamaño (efecto)
export function overImagenes(){
    contenedor.addEventListener('mouseover', ()=>{
     const dondeEstaAhora=event.target;
      if (dondeEstaAhora.tagName==='IMG') {
                                   dondeEstaAhora.style.transform='scale(1.5)';
                                   dondeEstaAhora.classList.add('card');
                                   } 
    })
    contenedor.addEventListener('mouseout', ()=>{
    const dondeEstaAhora=event.target;
    if (dondeEstaAhora.tagName==='IMG') {
                                   dondeEstaAhora.style.transform='scale(1.0)';
                                     } 
    })
}
