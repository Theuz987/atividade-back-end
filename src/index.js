import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Rélôu!");
});

const eventos = [
    {nome: "GeekXperience",
    data: 26/8/2025,
    local: "Araraquara"},
    {nome: "Campus Party",
    data: 7/10/2025,
    local: "Ribeirão Preto"},
    {nome: "ComicConXperience",
    data: 13/12/2025,
    local: "São Paulo"},    
];

app.get("/eventos", (req, res) => {
    res.json(eventos)
})