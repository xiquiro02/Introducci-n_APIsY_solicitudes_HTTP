const PeticionPost= async (id) => {
    const usuario = await fetch(`http://localhost:8000/comments`, {
    method: 'POST',
    body: JSON.stringify({
    potId: id,
    body: 'Contenido duplicado',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    });
    const publicacion = await usuario.json();
    console.log(publicacion);
}

PeticionPost(11);