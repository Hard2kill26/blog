// Schema es como los campos de la tabla y model es como el nombre de la tabla
import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true, //evita que se publique otro título igual
    trim: true, //permite eliminar espacios innecesarios
  },
  description: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
},
  {
  timestamps: true,
  versionKey: false
  }
);

export default model("Task", taskSchema);
