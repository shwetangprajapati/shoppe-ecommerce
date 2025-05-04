import ProductSections from "@/components/featured-products";
import HeroSection from "@/components/hero-section";
import { stripe } from "@/lib/stripe";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });
  
  return (
    <>
      <HeroSection product={products.data[0]} />
      <ProductSections products={products.data.slice(1,5)} title="New Products"/>
      <ProductSections products={products.data.slice(5,9)} title="Trending Products"/>
      <ProductSections products={products.data.slice(9,13)} title="Featured Products"/>
    </>
  );
}
