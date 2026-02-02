const PeticionGetUsuario = async (id) => {
    const usuario = await fetch(`http://localhost:8000/users/${id}`);
    const infor = await usuario.json();
    console.log(infor);
}

PeticionGetUsuario(3);