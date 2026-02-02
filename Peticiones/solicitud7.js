const PeticionPatch= async (id) => {
    const usuario = await fetch(`http://localhost:8000/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
    id: id,
    userId: 1,
    title: 'Programa de aprendizaje SENA',
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    });
    const publicacion = await usuario.json();
    console.log(publicacion);
}

PeticionPatch(11);