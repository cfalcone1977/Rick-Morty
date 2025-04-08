     
export const contenedor=document.getElementById('CONTENEDOR');
       //const botonDetalle=document.createElement('button');
       
       const botonCerrarModal=document.getElementById('cerrarModal');

function crearElementosTarjeta(){
  

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
         const botonDetalle=document.createElement('button');
         botonDetalle.classList.add('boton-detalle');
         botonDetalle.textContent='Detalle';
         cuerpoTarjeta.appendChild(imagen);
         cuerpoTarjeta.appendChild(nombrePersonajeTarjeta);


         /*cuerpoTarjeta.appendChild(estadoPersonajeTarjeta);
         cuerpoTarjeta.appendChild(generoPersonajeTarjeta);
         cuerpoTarjeta.appendChild(especiePersonajeTarjeta);
         cuerpoTarjeta.appendChild(tipoPersonajeTarjeta);*/                                    
         cuerpoTarjeta.appendChild(botonDetalle);
         tarjeta.appendChild(cuerpoTarjeta);
         imagen.src=objeto.results[i].image


         nombrePersonajeTarjeta.textContent=objeto.results[i].name;
         estadoPersonajeTarjeta.textContent=objeto.results[i].status;
         generoPersonajeTarjeta.textContent=objeto.results[i].gender;
         especiePersonajeTarjeta.textContent=objeto.results[i].species;
         tipoPersonajeTarjeta.textContent=objeto.results[i].type;
         contenedor.appendChild(tarjeta);



        //***CREA ELEMENTOS VENTANA MODAL***
         //const nombre=document.createElement('p');
         //const estado=document.createElement('p');
         //const especie=document.createElement('p');
         //const tipo=document.createElement('p');
        // const genero=document.createElement('p');
         //nombre.textContent=objeto.results[i].name;
         //estado.textContent=objeto.results[i].status;
         //especie.textContent=objeto.results[i].species;
         //tipo.textContent=objeto.results[i].type;
         //genero.textContent=objeto.results[i].gender;
         //cuerpoModal.appendChild(nombre);
         //cuerpoModal.appendChild(estado);
         //cuerpoModal.appendChild(especie);
         //cuerpoModal.appendChild(tipo);
         //cuerpoModal.appendChild(genero);
         //ventanaModal.appendChild(cuerpoModal);
         //const nombre=document.createElement('p');
         //const estado=document.createElement('p');
         //const especie=document.createElement('p');
         //const tipo=document.createElement('p');
         //const genero=document.createElement('p');
         //nombre.textContent="Nombre: "+nombrePersonajeTarjeta.textContent;
         //estado.textContent="Estado: "+estadoPersonajeTarjeta.textContent;
         //especie.textContent="Espacie: "+especiePersonajeTarjeta.textContent;
         //tipo.textContent="Tipo: "+tipoPersonajeTarjeta.textContent;
         //genero.textContent="Genero: "+generoPersonajeTarjeta.textContent;        


     tarjeta.addEventListener('click',()=>{
         let ventanaModal=document.getElementById('ventanaModal');
         let cuerpoModal=document.getElementById('cuerpoModal');
         console.log(nombrePersonajeTarjeta.textContent);
         console.log(estadoPersonajeTarjeta.textContent);         
         console.log(generoPersonajeTarjeta.textContent);
         console.log(especiePersonajeTarjeta.textContent);  
         console.log(tipoPersonajeTarjeta.textContent);
         const nombre=document.createElement('p');
         const estado=document.createElement('p');
         const especie=document.createElement('p');
         const tipo=document.createElement('p');
         const genero=document.createElement('p');
         nombre.textContent=nombrePersonajeTarjeta.textContent
         cuerpoModal.appendChild(nombre);
         ventanaModal.appendChild(cuerpoModal);

         ventanaModal.showModal();
         botonCerrarModal.addEventListener('click',()=>{
            cuerpoModal.innerHTML="";
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