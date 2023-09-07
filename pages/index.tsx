
import React from "react";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import getAllProducts from "@/framework/shopify/product/get-all-products";


// getstaticprops faghat dakhele foldere page=>index.tsx kar mikone va dakhele folderhaye dg kar nemikone

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts();
  return {
    props: {
      // what you want to return to Home function:
      products
    },
    // means ecery 4 hour you check if you have some new product in database or wherever, it would send them to your page
    revalidate: 4 * 60 * 60

  }
}

const Home = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log({products});
  // if you want to see the request to server on the network section of the browser (bcz getstaticprops doesnt happen on browser) you can do this => but isnt this unsecure thing?
  // getAllProducts();
  // *************************

  console.log({ products })
  return (
    <div>{JSON.stringify(products)}</div>
  )
}
export default Home;