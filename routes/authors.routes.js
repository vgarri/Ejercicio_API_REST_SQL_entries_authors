const express = require('express');
// Rutas de productos
const authorsController = require("../controllers/authors.controller");
const router = express.Router();

router.get('/', authorsController.getAuthors);
router.get('/email',authorsController.getAuthorByEmail);
// router.post('/', entriesController.createEntry);
// router.put('/',entriesController.updateEntry);
// router.delete('/', entriesController.deleteEntry);

module.exports = router;