import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCategory from "../components/ProductCategory";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };

    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updateList = data.filter((product) => product.category === cat);
    setFilter(updateList);
  };

  const Loading = () => {
    return <p>Loading...</p>
  };

  const ShowProducts = () => {
    return (
      <ProductCategory
        setFilter={setFilter}
        filterProduct={filterProduct}
        data={data}
      />
    );
  };

  return (
    <div>
      {loading ? <Loading /> : <ShowProducts />}

      <div className="w-full px-24 mt-16">
        <div className="w-full grid grid-cols-4 gap-12">
          {filter.map((product) => (
            <div className="flex w-full max-w-[300px] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img
                  className="w-full max-w-[200px] h-[210px] mx-auto"
                  src={product.image}
                  alt="profile-picture"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {`${product.title.slice(0, 10)}...`}
                </h4>
                <p className="block text-[18px] font-bold">
                  {`${product.price} $`}
                </p>
                <Link to={`/products/${product.id}`}>
                  <button className="bg-[blue] text-white px-7 py-2 mt-4 rounded-md">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
