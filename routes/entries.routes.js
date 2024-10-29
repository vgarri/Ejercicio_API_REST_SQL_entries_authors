const express = require('express');
// Rutas de productos
const entriesController = require("../controllers/entries.controller");
const router = express.Router();//express tiene un metodo Router para especificar que este archivo contiene las rutas

router.get('/', entriesController.getEntries); //cada accion CRUD http tiene su referencia al controller
router.post('/', entriesController.createEntry);
router.put('/',entriesController.updateEntry);
router.delete('/', entriesController.deleteEntry);

module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
// PUT http://localhost:3000/api/entries --> pasar objeto.json con original title como criterio de busqueda
// DELETE http://localhost:3000/api/entries ---> pasar el titulo por {"title": "titulo de la entry a borrar"}
