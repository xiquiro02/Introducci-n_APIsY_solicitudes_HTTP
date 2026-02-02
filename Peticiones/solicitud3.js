const PeticionGetPosts = async (id) => {
    const usuario = await fetch(`http://localhost:8000/posts/${id}`);
    const publicacion = await usuario.json();
    console.log(publicacion);
}

PeticionGetPosts(5);