
import db from "../config/db.js";


const productSchema = new db.Schema({
  product_nome: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  value:{
type: Number,
required: true,
  }
});

const product = db.model("product", productSchema);

export default product;