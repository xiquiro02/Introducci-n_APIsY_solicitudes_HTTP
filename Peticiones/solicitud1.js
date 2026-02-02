const PeticionGet = async () => {
    const enviar = await fetch('http://localhost:8000/users');
    const lista = await enviar.json();
    console.log(lista);
}

PeticionGet();