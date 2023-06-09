import AsyncHandler from "express-async-handler";
import productModel from "../model/productModel.js";

export const addProduct = AsyncHandler(async (req, res) => {
  const image = req.file;

  await productModel.create({
    ...req.body,
    category: req.body.category,
    image,
  });
  res.json({ message: "product added" });
});
