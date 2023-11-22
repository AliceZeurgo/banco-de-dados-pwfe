'use strict'


async function listarUsuarios () {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

async function cadastrarUsuario (usuario) {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log (response.ok)
    return response.ok
}

async function deletarUsuario (id){
    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok
}

async function atualizarUsuario (usuario) {
     const url = `http://10.107.140.2:8080/usuarios/${usuario_id}`
    const   options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}
//Para teste
/*
const novoUsuario ={
    nome: 'Alice Zeurgo',
    email: 'AliceZeurgo@gmail.com'
}
*/
atualizarUsuario(28)

const usuarioAtualizado = {
    id: '28',
    nome: 'Lice Zeurgo',
    email: 'AliceZeurgoLinda@gmail.com'
}

//deletarUsuario(61);//

//cadastrarUsuario(novoUsuario);//

listarUsuarios();