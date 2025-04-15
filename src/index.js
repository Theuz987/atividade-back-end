import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Rélôu!");
});

const eventos = [
    {id: 1,
    nome: "GeekXperience",
    data: 26/8/2025,
    local: "Araraquara"},
    {id: 2,
    nome: "Campus Party",
    data: 7/10/2025,
    local: "Ribeirão Preto"},
    {id: 3,
    nome: "ComicConXperience",
    data: 13/12/2025,
    local: "São Paulo"},    
];

app.get("/eventos", (req, res) => {
    res.json(eventos)
})

app.get("/eventos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const produto = eventos.find(evento => evento.id === id);
    res.json(evento);
});

app.post("/eventos", (req, res) =>{
    const { nome, data, local } = req.body;
    const id = eventos.length + 1;
    produtos.push({nome, data, local});
    res.status(201).location(`/eventos/${id}`).send();
})

app.listen(4001, () => {
    console.log("REST API iniciada");
  });