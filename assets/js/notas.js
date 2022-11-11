let idGlobal = 2
let notas = [{
    idGlobal: 0,
    titulo: 'comprar comida',
    texto: 'para toda la semana',
    realizada: false
},
{
    idGlobal: 1,
    titulo: 'hacer la task 3',
    texto: 'estudiar porque sino no me aprueban',
    realizada: true
},
{
    idGlobal: 2,
    titulo: 'comprar comida',
    texto: 'para toda la semana',
    realizada: false
}]
let contenedorNotas = document.getElementById('contenedor-notas')
let creaNotas = document.getElementById('creaNotas')
let titulo = document.getElementById('titulo')
let texto = document.getElementById('texto')
let guardar = document.getElementById('guardar')
let borrar = document.getElementById('borrar')
let input = document.getElementById('searchInput')
let realizada = document.getElementById('realizadas')
let form = document.forms[0]


function pintarNotas(notas) {
    let marcarTexto = ''
    contenedorNotas.innerHTML = ''
    if (notas == '') {
        contenedorNotas.innerHTML = `<h1>NO HAY NOTAS PARA MOSTRAR </h1>`
    }
    notas.forEach(e => {
        if (e.realizada) {
            marcarTexto = 'realizada'
        } else {
            marcarTexto = ''
        }
        contenedorNotas.innerHTML += `
        <div class="card ${marcarTexto}" id="${e.idGlobal}">
        <input onClick="marcaRealizada(${e.idGlobal})" id="" type="checkbox" ${e.realizada ? "checked" : ""}>
        <h3>${e.titulo}</h3>
        <hr>
        <p>${e.texto}</p>
        <input type="submit" onClick="borrarNota(${e.idGlobal})" id="borrarNota" value="Borrar nota">
        </div>`
    });
}

function agregarNota(tituloNota, textoNota) {
    if (tituloNota != '' && textoNota != '') {
        idGlobal++
        let aux = {
            idGlobal: idGlobal,
            titulo: tituloNota,
            texto: textoNota,
            realizada: false
        }
        notas.push(aux)
        pintarNotas(notas)
    }
}

function borrarNota(id) {
    notas.forEach(e => {
        if (e.idGlobal == id) notas.splice(notas.indexOf(e), 1)
    })
    pintarNotas(notas)
}

function marcaRealizada(id) {
    notas.forEach((e) => {
        if (e.idGlobal == id && e.realizada != true) e.realizada = true
        else if (e.idGlobal == id && e.realizada == true) e.realizada = false
    })
    pintarNotas(notas)
}

function filtroInput(notas, searchInput) {
    return notas.filter(e => e.texto.toLowerCase().trim().includes(searchInput) || e.titulo.toLowerCase().trim().includes(searchInput))
}

function realizadas(notas) {
    let aux
    aux = notas.filter(e => e.realizada)
    return aux
}

guardar.addEventListener('click', (e) => {
    e.preventDefault()
    agregarNota(titulo.value, texto.value)
    form.reset()
})

borrar.addEventListener('click', () => {
    form.reset()
})

input.addEventListener('keyup', () => {
    let value = input.value
    pintarNotas(filtroInput(notas, value.toLowerCase().trim()))
})

realizada.addEventListener('click', ((e) => {
    let aux
    if (e.target.checked && input.value != '') {
        aux = filtroInput(notas, input.value.toLowerCase().trim())
        pintarNotas(realizadas(aux))
    } else {
        if (e.target.checked) {
            pintarNotas(realizadas(notas))
        } else {
            pintarNotas(notas)
        }
    }
}))

pintarNotas(notas)






