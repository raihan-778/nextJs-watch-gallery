import Products from "@/components/UI/Products";

/* export const getData = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache",
  });
  const data = await res.json();

  return data;
};
 */
const HomePage = async () => {
  // const data = await getData();

  //in app routing system we can fetch data easily without using any get staticprops function.And If we want we can create a function for fatch data in any file for folder but not mandatory to create in same component which was mandatory to "Page Routing System"
  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache",
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();

  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {data.map((product) => (
          <Products key={product.id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
