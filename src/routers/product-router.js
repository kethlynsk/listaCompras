import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,

  // logado,
} from "../controllers/product-controller.js";

const router = Router();

/* 
Onde está o check_token o usuario tem que estar logado
tanto faz o nivel de acesso

Onde está o check_role ai depende do nivel de acesso
*/
router.post("/", store); // Somente adm
router.get("/", index); // Somente usuário
router.get("/:id", show);
router.put("/:id", update);
router.delete("/:id", destroy);

export default router;