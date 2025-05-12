import mongoose, { Schema, models, model } from 'mongoose';

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: {
    type: String,
    enum: ['admin', 'docente', 'estudiante'],
    default: 'estudiante',
  },
  creadoEn: { type: Date, default: Date.now },
});

export default models.Usuario || model('Usuario', UsuarioSchema);
