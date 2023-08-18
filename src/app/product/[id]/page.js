import ProductDetails from "@/components/UI/ProductDetails";

const ProductDetailsPage = async ({ params }) => {
  console.log(params.id);
  const res = await fetch(`http://localhost:5000/watches/${params.id}`, {
    cache: "no-store",
  }); //here no-cache or no-store is used to fatch data using SSR(server side render), by default it is used ssg(static side generation)
  const data = await res.json();

  return (
    <div>
      <ProductDetails key={data} product={data}></ProductDetails>
    </div>
  );
};

export default ProductDetailsPage;
