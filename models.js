const mongoose = require("mongoose");

const Cliente = mongoose.model(
  "Cliente",
  new mongoose.Schema({ nombre: String, apellidos: String, num_armas: Number })
);

const Arma = mongoose.model(
  "Armas",
  new mongoose.Schema({ nombre: String, tipo: String })
);

module.exports = {
  Cliente: Cliente,
  Arma: Arma,
};
