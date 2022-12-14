// importando o express e os tipos Request, Response e NextFunction

import express, { Request, Response, NextFunction } from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
const app = express();
//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Configurações de rotas
app.use(usersRoute);
app.use(statusRoute);

//Inicialização do servidor
app.listen(3000, () =>{
    console.log("Executando aplicação na porta 3000!");

});