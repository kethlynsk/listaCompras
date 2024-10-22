import express from "express";
import "dotenv/config";
import product_router from "./routers/product-router.js";

const app = express();

app.use(express.json());


app.use("/product", product_router)

app.listen(process.env.API_PORT, () => console.log("Servidor executando na porta " + process.env.API_PORT));