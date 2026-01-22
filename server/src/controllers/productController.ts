import { type Request, type Response } from "express";
import { prisma } from "../prisma-client";

/**
 * Endpoint to fetch products from database, with optional search query.
 *
 * @param search Optional search query for searching specific products
 */
export async function getProductsWithSearch(
	req: Request,
	res: Response,
): Promise<void> {
	try {
		const searchQuery = req.query.search?.toString();
		const products = await prisma.product.findMany({
			where: {
				name: {
					contains: searchQuery,
				},
			},
			take: 20,
		});

		res.json(products);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving products." });
	}
}

/**
 * Endpoint to create a product in database.
 *
 */
export async function createProduct(
	req: Request,
	res: Response,
): Promise<void> {
	try {
		const { id, name, price, rating, stockQuantity } = req.body;
		const product = await prisma.product.create({
			data: {
				id,
				name,
				price,
				rating,
				stockQuantity,
			},
		});

		res.status(201).json(product);
	} catch (error) {
		res.status(500).json({ message: "Error creating product." });
	}
}
