const PeticionDelete= async (id) => {
    const usuario = await fetch(`http://localhost:8000/posts/${id}`, {
    method: 'DELETE',
    });
    const publicacion = await usuario.json();
    console.log("Eliminando", publicacion);
}

PeticionDelete(11);