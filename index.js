// // hello world 
// const mensagem = "hello world"

// {
//     const mensagem = "hello world"
//     console.log(mensagem)
// }
// // arrays, objetos
// let meta = {
//     value: 'ler um livro por mês',
//     checked: true,
//     address: 2, 
//     log: (info) => {
//         console.log(info)
//     },
// }

// meta.value = "não é mais ler um livro"
// meta.log(meta.value)

// let meta = {
//     value:'ler um livro por mês',
//     checked: true,
// }

// let metas = [
//     meta,
//     {
//         value: "caminhar 20 minutos todos os dias",
//         checked: false
//     }
// ]

// console.log(metas[1].value)

// // function // arrow function
// //const criarMeta = () => {}

// //function criarMeta() {}


// const start1 = () => {
//     let count = 0 
//     while(count => 10){
//         console.log(count)
//         count = count + 1 // ou count++
//     }
// }

// start1()

////////////

const{ select, input } = require('@inquirer/prompts')


let meta = {
    value: 'Tomar 3L de água por dia',
    checked: false,
}
let metas = [ meta ]

const cadastrarMeta = async () => {
    const meta = await input ({ message: "Digite a meta:"})

    if(meta.length == 0) {
        console.log('A meta não pode ser vazia')
        return 
    }

    metas.push(
        {value: meta, checked: false}
    )

}

const listarMetas = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar ou desmarcar e o Enter para finalizar essa etapa",
        choices: [...metas],
        instructions: false,
    }) 

    if(respostas.length == 0) {
        console.log("Nenhuma meta selecionada!")
        return
    }

    repostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value = resposta
        })

        meta.checked = true
    })

    console.log('Meta(s) marcadas como concluída(s)')
}
const start = async () => {

    while(true){

        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastra meta",
                    value: "cadastrar"
                },
                {
                    name:"Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
        ]
        })


        switch(opcao) {
            case "cadastrar": 
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                console.log("vamos listar")
                break
            case "sair":
                console.log("Até a proxima!")
                return
        }
    }
}

start()