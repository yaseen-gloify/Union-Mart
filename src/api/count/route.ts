import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { Module, Modules } from "@medusajs/framework/utils";

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const productService = req.scope.resolve(Modules.PRODUCT);
  const [, count] = await productService.listAndCountProducts();
  res.json({
    data: count,
  });
};
