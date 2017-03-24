// Carregue o módulo http para criar um servidor HTTP.
var http = require('http');
 
// Configura nosso servidor HTTP para responder com Olá Mundo a todas as solicitações.
var server = http.createServer(function (request, response) {
  // Define os parâmetros de cabeçalho de resposta
  response.writeHead(200, {"Content-Type": "text/html"});
  // Envia uma resposta para o cliente com a mensagem Hello World
  response.write('<html><body><h1>Hello World</h1></body></html>');
  // Envia resposta para o cliente
  response.end();
});
// Define a porta 7000 onde será executado, o ip padrão é 127.0.0.1 / localhost
server.listen(7000);
 
// Imprime uma mensagem no servidor
console.log("Server running at http://localhost:7000/");