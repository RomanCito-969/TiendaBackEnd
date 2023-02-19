const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ Nombre: String, Apellidos: String , Num_Armas: Number})
);

const Arma = mongoose.model('Armas',
  new mongoose.Schema({ Nombre: String, Tipo: String })
);

module.exports = {
  Cliente: Cliente,
  Arma: Arma
}
