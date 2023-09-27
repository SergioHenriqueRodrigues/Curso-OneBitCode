function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2))
}
//dobro(5)
//dobro(7)
//dobro()

function dizerOla(nome = "Mundo"){
    alert("Olá, " + nome + "!")
}
//dizerOla("Sérgio")
//dizerOla()

function soma(a, b){
    alert("O resultado da soma é " + (a + b) + "!")
}
//soma(7,6)
//soma(1,1)

function criarUsuario(nome, email, senha, tipo = "Admin"){
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario)
}

//criarUsuario("Sérgio", "sergio@gmail.com", "12345")
/*
function novoUsuario(nome, tipo = "Admin", email, senha){
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario)
}

novoUsuario("Sérgio", "sergio@gmail.com", "12345")*/

function muitoParametros(nome, telefone,endereco, aniversario, email,senha){
    //...
}

muitoParametros("nome", "telefone","endereco", "aniversario", "email","senha")

function objComoParametro(usuario){
    usuario.nome
    usuario.email
}

const dadosdoUsuario = {
    nome: "",
    telefone: "",
    endereco: "",
    aniversario: "",
    email: "",
    senha: "",
}
objComoParametro(dadosdoUsuario)