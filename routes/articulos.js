import express from "express";
import Articulo from "../models/articulosmodel.js"; 

const router = express.Router();

// Crear
router.post("/", async (req, res) => {
  try {
    const nuevo = new Articulo(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ message: "Error al crear artículo", error });
  }
});

// GET
router.get("/", async (req, res) => {
  try {
    const articulos = await Articulo.find();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener artículos", error });
  }
});

// GET
router.get("/:id", async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id);
    if (!articulo) return res.status(404).json({ message: "No encontrado" });
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar artículo", error });
  }
});

// Actualizar
router.put("/:id", async (req, res) => {
  try {
    const actualizado = await Articulo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ message: "Error al actualizar artículo", error });
  }
});

// Eliminar 
router.delete("/:id", async (req, res) => {
  try {
    await Articulo.findByIdAndDelete(req.params.id);
    res.json({ message: "Artículo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar artículo", error });
  }
});

export default router; 
