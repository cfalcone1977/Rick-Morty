
export async function traerPersonajes(pagina) {
    try {
        const response = await fetch(pagina);
        const data = await response.json();
        if (data.status>=400){
                                         throw new Error(data.errorMessages[0]);
                             }
        return data;
    } catch (error) {
        //console.log(error.message);
        //console.error("Error al acceder");
        return null;//si da error se devuelve null
    }
}

