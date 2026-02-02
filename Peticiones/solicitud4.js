const PeticionPost= async (id) => {
    const usuario = await fetch(`http://localhost:8000/posts/`, {
    method: 'POST',
    body: JSON.stringify({
    userId: id,
    title: 'XimenaQUIRO',
    body: 'Tecnologo en Analisis y Desarrollo Software',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    });
    const publicacion = await usuario.json();
    console.log(publicacion);
}

PeticionPost(1);