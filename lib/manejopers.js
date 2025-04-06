const contenedor=document.getElementById('CONTENEDOR');

export function mostrarPersonajes(objeto){
    //let tarjeta=[];
    for (let i = 0; i < objeto.results.length; i=i+1) {
         //console.log(i);
         //tarjeta[i]=document.createElement('div');
         //tarjeta[i].classList.add('card');
         //tarjeta[i].style.width = '12rem';
         const tarjeta=document.createElement('div');
         tarjeta.classList.add('card');
         tarjeta.style.width = '12rem';
         const cuerpoTarjeta=document.createElement('div');
         cuerpoTarjeta.classList.add('card-body');
         const informacionTarjeta=document.createElement('p');
         informacionTarjeta.classList.add('card-text');
         const imagen=document.createElement('img');
         imagen.classList.add('card-img-top');
         cuerpoTarjeta.appendChild(imagen);
         cuerpoTarjeta.appendChild(informacionTarjeta);
         //tarjeta[i].appendChild(cuerpoTarjeta);
         tarjeta.appendChild(cuerpoTarjeta);
         imagen.src=objeto.results[i].image
         informacionTarjeta.textContent=objeto.results[i].name;
         contenedor.appendChild(tarjeta);
         //contenedor.appendChild(tarjeta[i]);
    }  
  }

export function borrarTarjetas(){
    contenedor.innerHTML="";
}