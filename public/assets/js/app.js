
const tbody = document.getElementById("cuerpo");
const formularioACanciones = document.getElementById("agregarCancion")
const exampleModal = document.getElementById("exampleModal")
const formularioEcanciones = document.getElementById("fEditarCancion")

const myModal = new bootstrap.Modal(exampleModal)

let canciones = [];
const URL_DOMANI = 'http://localhost:3000'

formularioACanciones.addEventListener('submit', async (event) => {
    event.preventDefault()
    const titulo = event.target.titulo.value
    const artista = event.target.artista.value
    const tono = event.target.tono.value

    //validacion de inputs 
    if (!titulo.trim() || !artista.trim() || !tono.trim()) {
        return alert('campos obligatorios')
    }
    try {
        const { data } = await axios.post(URL_DOMANI + '/repertorio', {
            titulo: titulo,
            artista: artista,
            tono: tono
        })
        console.log(data)
        obtenerCanciones()

        event.target.reset()

    } catch (error) {
        console.log(error)
        alert(error?.resonse?.data?.msg)
    }

})

const obtenerCanciones = async () => {
    try {
        const { data } = await axios.get(URL_DOMANI + '/repertorio')
        canciones = data
        tbody.innerHTML = ""
        canciones.forEach((c, i) => {
            tbody.innerHTML +=/*html*/ `
            <tr>
                <td>${i + 1}</td>
                <td>${c.titulo}</td>
                <td>${c.artista}</td>
                <td>${c.tono}</td>
                <td>
                    <button class="btn btn-warning" onclick="prepararCancion('${c.id}')">Editar</button>
                    <button class="btn btn-danger" onclick="eliminarCancion('${c.id}')">Eliminar</button>
                </td>
            </tr>
        `
        })

    } catch (error) {
        console.log(error)
        alert(error?.resonse?.data?.msg)
    }
}

obtenerCanciones()


const eliminarCancion = async (id) => {

    try {
        if (confirm('¿Seguro deseas eliminar esta cancion?')) {
            await axios.delete(URL_DOMANI + '/repertorio/' + id)
            obtenerCanciones()
        }


    } catch (error) {
        console.log(error)
        alert(error?.resonse?.data?.msg)
    }
}



const prepararCancion = async (id) => {
    try {
        const { data } = await axios.get(URL_DOMANI + '/repertorio/' + id);
        canciones = data

        console.log('Título de la canción:', canciones)

        formularioEcanciones.titulo.value = canciones.titulo
        formularioEcanciones.artista.value = canciones.artista
        formularioEcanciones.tono.value = canciones.tono

        myModal.show();
        formularioEcanciones.addEventListener('submit', async (event) => {
            event.preventDefault()
            const respuesta = await axios.put(URL_DOMANI + '/repertorio/' + id, {
                titulo: formularioEcanciones.titulo.value,
                artista: formularioEcanciones.artista.value,
                tono: formularioEcanciones.tono.value

            })
            console.log(respuesta)
            myModal.hide();
            obtenerCanciones();
        })

    } catch (error) {
        console.error(error)
        alert(error?.response?.data?.msg)
    }
}

