
export async function traerPersonajes(pagina) {
    try {
        console.log(pagina);
        const response = await fetch(pagina);
        const data = await response.json();
        //console.log(data.status);
        if (data.status>=400){
                                         throw new Error(data.errorMessages[0]);
                             }
        return data;// un objeto data con diferentes propiedades, otros objetos y arreglos.
    } catch (error) {
        console.log(error.message);
        //console.error("Error al acceder a CUIT:",error.message);
        return null;//si da error se devuelve null
    }
}

