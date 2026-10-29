import express from 'express';  
import peliculas from './data/peliculas.js';

const app = express();
app.get("/", (req, res) =>{
    res.send("Bienvenido a la API de Películas");
})

app.get("/", (req, res) =>{
    res.send("Bienvenido a la API de Películas");
})
app.get("/peliculas", (req, res) =>{
    res.json(peliculas);
})

app.get("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const pelicula = peliculas.find((p) => p.id === id);
  if (!pelicula) {
    return res.status(404).json({ error: "Película no encontrada" });
  }
  res.json(pelicula);
});

app.post("/peliculas", (req, res) => {
    const { titulo, genero, director, año } = req.body;
    const nuevaPelicula = {
        id: peliculas.length > 0 ? Math.max(...peliculas.map(p => p.id)) + 1 : 1,
        titulo,
        genero,
        director,
        año
    };
    peliculas.push(nuevaPelicula);
    res.status(201).json(nuevaPelicula);
});

app.delete("/peliculas/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = peliculas.findIndex((p) => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Película no encontrada" });
    }
    peliculas.splice(index, 1);
    res.status(204).send();
});


app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})













/*const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    
    res.end("Hola desde el servidor")
})

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
})*/

