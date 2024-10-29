const express = require('express') //importamos paquete express
const app = express() // inicializar servidor con express
const port = 3000 // puerto a usar por el server
app.use(express.json()); // Middleware para parsear el body de las peticiones

const entriesRoutes = require("./routes/entries.routes") // importamos los archivos de rutas
const authorsRoutes = require("./routes/authors.routes")


// Rutas a Habilitar
//API
app.use('/api/entries',entriesRoutes); // habilitamos las rutas con el prefijo /api
app.use('/api/authors',authorsRoutes);

//para rutas no existentes o erroneas
app.use("*",(req, res) => {
    res.status(404).send("Ruta no encontrada");
  });
//Para tener el puerto 3000 en localhost por consola, cmd+click
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
});