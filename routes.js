const cors       = require('cors')
const express    = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get    ("/clientes",      cors(), controller.readClientes);   // Read All
router.get    ("/clientes/:id",  cors(), controller.readCliente);    // Read
router.delete ("/clientes/:id",  cors(), controller.deleteCliente);  // Delete
router.put    ("/clientes/:id",  cors(), controller.updateCliente);  // Update
router.post   ("/clientes",      cors(), controller.createCliente);  // Create

router.get    ("/armas",     cors(), controller.readArmas);  // Read All
router.get    ("/armas/:id", cors(), controller.readArma);   // Read
router.delete ("/armas/:id", cors(), controller.deleteArma); // Delete
router.put    ("/armas/:id", cors(), controller.updateArma); // Update
router.post   ("/armas",     cors(), controller.createArma); // Create


module.exports = router;