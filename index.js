// hello world 
const mensagem = "hello world"

{
    const mensagem = "hello world"
    console.log(mensagem)
}
// arrays, objetos
let meta = {
    value: 'ler um livro por mês',
    checked: true,
    address: 2, 
    log: (info) => {
        console.log(info)
    },
}

meta.value = "não é mais ler um livro"
meta.log(meta.value)

let meta = {
    value:'ler um livro por mês',
    checked: true,
}

let metas = [
    meta,
    {
        value: "caminhar 20 minutos todos os dias",
        checked: false
    }
]

console.log(metas[1].value)

// function // arrow function
//const criarMeta = () => {}

//function criarMeta() {}


const start1 = () => {
    let count = 0 
    while(count => 10){
        console.log(count)
        count = count + 1 // ou count++
    }
}

start1()

const start = () => {

    while(true){
        let opcao = "cadastrar"
        switch(opcao) {
            case "cadastrar": 
                console.log("vamos cadastrar")
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                return
        }
    }
}

start()