import { Router } from "express";
import {
	createProduct,
	getProductsWithSearch,
} from "../controllers/productController";

const router = Router();

router.get("/", getProductsWithSearch);
router.post("/", createProduct);

export default router;
