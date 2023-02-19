const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
  new mongoose.Schema({ _id :Number,Nombre: String, Apellidos: String , Num_Armas: Number})
);

const Arma = mongoose.model('Armas',
  new mongoose.Schema({ _id :Number, Nombre: String, Tipo: String })
);

module.exports = {
  Cliente: Cliente,
  Arma: Arma
}
