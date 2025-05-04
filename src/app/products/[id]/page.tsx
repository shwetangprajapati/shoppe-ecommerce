import { ProductDetail } from "@/components/product-detail";
import { stripe } from "@/lib/stripe";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));
  return <div className="min-h-screen bg-gray-50 text-black p-6 flex flex-col items-center">
    <ProductDetail product={plainProduct} />
  </div>;
}