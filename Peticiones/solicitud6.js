const PeticionPut= async (id) => {
    const usuario = await fetch(`http://localhost:8000/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
    id: id,
    userId: 1,
    title: 'Linux',
    body: 'Sistema operativo',
    }),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    });
    const publicacion = await usuario.json();
    console.log(publicacion);
}

PeticionPut(2);