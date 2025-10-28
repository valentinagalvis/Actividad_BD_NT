import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import articuloRoutes from "./routes/articulos.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/articulos", articuloRoutes);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conexión exitosa a MongoDB Atlas");
    app.listen(process.env.PORT, () =>
      console.log(`Servidor corriendo en el puerto ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error("Error al conectar MongoDB:", err));
