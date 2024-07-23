require('dotenv').config();
const Server = require('./server/config');
const server = new Server();

server.listen();




// Esto no sirve 


// const http = require('http');
// const url = require('url');

// let preguntas = {};

// const router = {
//     GET: {},
//     POST: {}
// };

// const handlerRoute = (metodo, ruta, funcion) => {
//     router[metodo]
// };

// handlerRoute('GET', '/preguntas', (req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end(JSON.stringify(preguntas));
// });

// handlerRoute('POST', '/preguntas', (req, res) => {
//     let body = '';

//     req.on('data', (fragamentosDelBody) => {
//         body += fragamentosDelBody.toString();
//     });

//     req.on('end', () => {
//         const pregunta = JSON.parse(body);
//         const id = crypto.randomUUID();

//         preguntas[id] = {id, pregunta};
//         res.writeHead(201, { 'Content-Type': 'text/plain' });
//         res.end(JSON.stringify(preguntas));
//     });
   
// });

// const server = http.createServer((req, res) => {
//     const urlPrueba = url.parse(req.url, true)
//     const metodo = req.method
//     const ruta = urlPrueba.pathname
//     const funcion = router[metodo][ruta]
//     // res.end()
//     if (funcion) {
//         funcion(req, res)
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' })
//         res.end('Error en la ruta')
//     }
// });

// server.listen(3000, () => {
//     console.log('Servidor funcionando')
// });