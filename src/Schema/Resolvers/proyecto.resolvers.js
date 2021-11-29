const Proyecto = require("../../model/proyecto");
const moment = require("moment");
moment.locale("en");

module.exports.resolversProyecto = {
  proyecto_ID: async (args) => {
    const _id = args._id;
    return await Proyecto.findById(_id);
  },
  proyecto_nombre: async (args) => {
    const nombre_proyecto = args.nombre_proyecto;
    const datos = await Proyecto.findOne({ nombre_proyecto: nombre_proyecto });
    return datos;
  },
  proyecto_fecha_inicio: async (args) => {
    const _identificacion = args.fecha_inicio;
    return await Proyecto.findOne({ identificacion: _identificacion });
  },
  proyecto_estado: async (args) => {
    const estado = args.estado;
    const datos = await Proyecto.find({ estado: estado });
    return datos;
  },

  crearProyecto: async ({ input }) => {
    const _proyecto = new Proyecto({ ...input });
    return await _proyecto.save();
  },
  actualizarProyecto_ID: async ({ _id, input }) => {
    const _proyecto = { ...input };
    return await Proyecto.findByIdAndUpdate({ _id }, _proyecto);
  },
  // actualizarproyecto_doc_identificacion: async ({
  //   doc_identificacion,
  //   input,
  // }) => {
  //   const _proyecto = await mapearInput({ ...input });
  //   return await Proyecto.findOneAndUpdate({ doc_identificacion }, _proyecto);
  // },
  // actualizarproyecto_estado: async ({ estado, input }) => {
  //   const _proyecto = await mapearInput({ ...input });
  //   return await Proyecto.findOneAndUpdate({ estado }, _proyecto);
  // },

  // eliminarproyecto_objetivo_general: async ({ objetivo_general }) => {
  //   const _proyecto = await mapearInput({ ...input });
  //   return await Proyecto.findOneAndDelete({ objetivo_general }, _proyecto);
  // },
  // eliminarproyecto_ID: async ({ _id }) => {
  //   return await Usuario.findByIdAndDelete({ _id });
  // },
};
