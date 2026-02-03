const PeticionVerificarEliminado  = async (id) => {
    const respuesta  = await fetch(`http://localhost:8000/posts/${id}`);
    const eliminada = await respuesta.json();
    console.log("Verificar post o publicación eliminada: ", eliminada);
}

PeticionVerificarEliminado(11);

// como el post fue eliminado sale un error el cual indica que ya se eliminó 
