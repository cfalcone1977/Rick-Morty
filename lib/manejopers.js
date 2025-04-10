     
export const contenedor=document.getElementById('CONTENEDOR');
       const ventanaModal=document.getElementById('ventanaModal');
       const cuerpoModal=document.getElementById('cuerpoModal');
       const botonCerrarModal=document.getElementById('cerrarModal');

function crearModalDetalle(imagen,nombre,estado,genero,especie,tipo){
  const imagenModal=document.createElement('img');
  const nombreModal=document.createElement('p');
  const estadoModal=document.createElement('p');
  const generoModal=document.createElement('p');
  const especieModal=document.createElement('p');
  const tipoModal=document.createElement('p');
  
  imagenModal.src=imagen.src;
  nombreModal.textContent="Nombre:   "+nombre.textContent;
  estadoModal.textContent="Estado:   "+estado.textContent;
  generoModal.textContent="Genero:   "+genero.textContent;
  especieModal.textContent="Especie: "+especie.textContent;
  tipoModal.textContent="Tipo:    "+tipo.textContent;
  cuerpoModal.appendChild(imagenModal);
  cuerpoModal.appendChild(nombreModal);
  cuerpoModal.appendChild(estadoModal);
  cuerpoModal.appendChild(generoModal);
  cuerpoModal.appendChild(especieModal);
  cuerpoModal.appendChild(tipoModal);
  ventanaModal.appendChild(cuerpoModal);
}

function borrarModal(){
       console.log(cuerpoModal);
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
         /*estadoPersonajeTarjeta.style.display='none';
         generoPersonajeTarjeta.style.display='none';
         especiePersonajeTarjeta.style.display='none';
         tipoPersonajeTarjeta.style.display='none';*/ 
         const imagen=document.createElement('img');
         imagen.classList.add('card-img-top');
         //const botonDetalle=document.createElement('button');
         //botonDetalle.classList.add('boton-detalle');
         //botonDetalle.textContent='Detalle';
         cuerpoTarjeta.appendChild(imagen);
         cuerpoTarjeta.appendChild(nombrePersonajeTarjeta);

         tarjeta.appendChild(cuerpoTarjeta);
         imagen.src=objeto.results[i].image
         nombrePersonajeTarjeta.textContent=objeto.results[i].name;
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
          botonCerrarModal.addEventListener('click',()=>{
                                   borrarModal();
                                   ventanaModal.close()});
          })    
    }  
  }

export function borrarTarjetas(){
    contenedor.innerHTML="";
}

//botonDetalle.addEventListener('click',()=>{
//      console.log("Mostrar ventana modal de ");
//})