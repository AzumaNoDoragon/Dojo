const express = require('express')
const operacoes = require('./operacoes')

const porta = 3000
const app = express()

app.use(express.json())
app.use(operacoes)

app.listen(porta, () => {
    console.log(`Servidor Express exec na porta ${porta}`)
    }
)

// const http = require("http");

// const porta = 3000;

// let getFunction = (req, res) => {
//     let mensagem;
    
//     switch (req.url) {
//         case "/adicao":
//             mensagem = "Você está na rota adição"
//             break;
//         case "/subtracao":
//             mensagem = "Você está na rota subtração"
//             break;
//         case "/multiplicacao":
//             mensagem = "Você está na rota multiplicação"
//             break;
//         case "/divisao":
//             mensagem = "Você está na rota divisão"
//             break;
//         default:
//             error(res)
//             return;
//     }
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({
//         mensagem: mensagem  
//     }))
// }

// let postFunction = (req, res) => {
//     let mensagem;
//     let corpo = ""

//     req.on("data", (parte) => {
//         corpo += parte;
//     });
    
//     req.on("end", () => {
//         const dadosRecebidos = JSON.parse(corpo);
//         let resultados
        
//         switch (req.url) {
//             case "/adicao":
//                 mensagem = "Você está na rota adição"
//                 resultados = dadosRecebidos.a + dadosRecebidos.b
//                 break;
//             case "/subtracao":
//                 mensagem = "Você está na rota subtração"
//                 resultados = dadosRecebidos.a - dadosRecebidos.b
//                 break;
//             case "/multiplicacao":
//                 mensagem = "Você está na rota multiplicação"
//                 resultados = dadosRecebidos.a * dadosRecebidos.b
//                 break;
//             case "/divisao":
//                 mensagem = "Você está na rota divisão"
//                 resultados = dadosRecebidos.a / dadosRecebidos.b
//                 break;
//             default:
//                 error(res)
//                 return;
//         }

//         res.writeHead(201, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({
//             mensagem: mensagem,
//             resultado: resultados
//         }));
//     });
// }

// let error = (res) => {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({
//         erro: "Rota não encontrada"
//     }));
// }

// const callback = (req, res) => {
//     if (req.method === "GET") {
//         getFunction(req, res)
//     }

//     else if (req.method === "POST") {
//         postFunction(req, res)
//     }

//     else {
//         error(res)
//     }
// };

// const servidor = http.createServer(callback)

// servidor.listen(porta, () => {
//     console.log(`Servidor executando em http://localhost:${porta}`);
// });
