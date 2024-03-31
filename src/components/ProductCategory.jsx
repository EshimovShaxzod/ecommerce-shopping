import React from 'react'

const ProductCategory = ({data, setFilter, filterProduct}) => {
  return (
    <div className='w-full mx-auto px-24'>
        <div className="w-full flex items-center justify-center gap-8 mt-12">
          <button className='bg-[aqua] px-6 py-1 text-xl rounded-md hover:opacity-60' onClick={() => setFilter(data) }>All</button>
          <button className='bg-[aqua] px-6 py-1  text-[19px] rounded-md hover:opacity-60' onClick={() => filterProduct("jewelery")}>jewelery</button>
          <button className='bg-[aqua] px-6 py-1  text-[19px] rounded-md hover:opacity-60' onClick={() => filterProduct("men's clothing")}>men's clothing</button>
          <button className='bg-[aqua] px-6 py-1  text-[19px] rounded-md hover:opacity-60' onClick={() => filterProduct("women's clothing")}>women's clothing</button>
        </div>
      </div>
  )
}

export default ProductCategory