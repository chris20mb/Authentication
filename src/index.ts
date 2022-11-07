// importando o express e os tipos Request, Response e NextFunction

import express, { Request, Response, NextFunction } from 'express';
const app = express();

//criando uma rota
app.get("/status" , (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo: 'bar'});


});
app.listen(3000, () =>{
    console.log("Executando aplicação na porta 3000!");

});