const mongoose = require("mongoose");
const { Schema } = mongoose;

const AvanceSchema = new Schema({
  id_proyecto: { type: Object, required: true },
  fecha_avances: { type: Date, required: true },
  descripcion: { type: String, required: true },
  observacion: { type: Array, required: true },
  id_usuario: { type: Object, required: true },
});
module.exports = mongoose.model("Avance", AvanceSchema, "avance");
