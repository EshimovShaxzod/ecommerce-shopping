import React from "react";
import { Link } from "react-router-dom";

const BestCollection = () => {
  return (
    <section className="w-full px-24">
      <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl">
        <div className="px-4 py-8 md:px-6 md:py-12 lg:px-20">
          <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">
            Our Best Selling Collection
          </h1>

          <div className="mt-3 grid grid-cols-3 gap-6 md:mt-10 md:grid-cols-3 lg:gap-8">
            <article className="bg-slate-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Mens' Scotch</h2>
              </div>
              <div className=" flex items-center justify-center md:mt-12 shadow-md p-3 rounded-md hover:shadow-xl">
                <img className="w-full h-[300px]" src="https://www.cho.co.uk/images/scotch-soda-lightweight-quilted-shirt-mens-jacket-p12545-437935_image.jpg" alt="" />
              </div>
            </article>

            <article className="bg-slate-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Mens' Red</h2>
              </div>
              <div className="mt-3 flex items-center justify-center md:mt-12 shadow-md p-3 rounded-md hover:shadow-xl">
                <img className="w-full h-[300px]" src="https://www.harringtonjacketstore.co.uk/cdn/shop/products/updates_PMP_Web20140116-1.jpg?v=1639056640" alt="" />
              </div>
            </article>

            <article className="bg-slate-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600 mb-8">Mens' Punk</h2>
                <p className="mt-2 text-xl font-semibold text-gray-800"></p>
              </div>
              <div className="mt-2 flex items-center justify-center md:mt-12 shadow-md p-3 rounded-md hover:shadow-xl">
                <img className="w-full h-[300px]" src="https://i.ebayimg.com/images/g/UXMAAOSwmt9jsqS9/s-l1200.webp" alt="" />
              </div>
            </article>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-5 md:mt-6 md:grid-cols-2 md:gap-6 lg:mt-8 lg:gap-8">
            <article className="bg-slate-50 p-8 w-full max-w-[550px] shadow-lg hover:shadow-2xl">
              <div>
                <h2 className="text-xl text-gray-600 mb-8">Mens' Black</h2>
              </div>
              <div className="mt-28 group shadow-md flex items-center justify-center md:mt-3">
                <img className="w-full  h-[300px] object-contain" src="https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/b/t/x/m-no-4zipper-black-zanesar-fashion-original-imagu4p4fyn77uw7.jpeg?q=20&crop=false" alt="" />
              </div>
            </article>

            <article className="bg-slate-50 p-8 w-full max-w-[550px] shadow-lg hover:shadow-2xl">
              <div>
                <h2 className="text-xl text-gray-600 mb-8">Womens' Brown</h2>
              </div>
              <div className="w-full mt-28 shadow-md flex items-center justify-center md:mt-1">
                <img className="w-full h-[300px] object-contain" src="https://tse3.mm.bing.net/th?id=OIP.x7ARHQpdNzVuTc5q2_JkwQHaJE&pid=15.1" alt="" />
              </div>
            </article>
          </div>

        <Link to={'/products'}>
          <button className="mx-auto block mt-12 bg-[#5a96bb] px-8 py-2 rounded-md text-white hover:bg-[blue]">All Product</button>
        </Link>
        </div>
      </div>
    </section>
  );
};

export default BestCollection;
