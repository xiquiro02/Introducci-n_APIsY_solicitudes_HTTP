const PeticionGetPosts = async (id) => {
    const publicacion = await fetch(`http://localhost:8000/posts/${id}`);
    const eliminada = await publicacion.json();
    console.log(eliminada);
}

PeticionGetPosts(11);
