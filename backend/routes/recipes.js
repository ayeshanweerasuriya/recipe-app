import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

export { router as recipesRouter };
