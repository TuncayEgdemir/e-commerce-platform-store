import getBillboard from "@/actions/get-billboard";
import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";
import React from "react";

export const revalidate = 0;

const HomePage = async() => {

  const billboard = await getBillboard("aab96f9c-79b3-4444-bcdf-f69e889cbb48");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
      </div>
    </Container>
  );
};

export default HomePage;
