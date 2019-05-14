var express = require('express');
var service = require('../services/simulacaoService');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200);
  res.send(service());
});

router.post('/', function(req, res, next) {
  let body = req.body; //o body está com o conteúdo do POST do Simulacao.js
  console.log('BODY: ', body);
  //validar os dados do body
  let retorno = service(body); //mando as informações recebidas para o serviço.
  //Lá devo fazer o papel de tratar as informações do body e armazenar elas
  console.log('RETORNO: ', retorno);
});

//Passo a passo do POST:
//Pegar as informações de fila e mandar através do body para o service
//No service, devo tratar as informações
//Tenho que descobrir como salvar as informações num arquivo JSON

module.exports = router;