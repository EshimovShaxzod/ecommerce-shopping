import React from 'react'
import HeroImg from '../../public/girls-shop.webp'

const Hero = () => {
  return (
    <section className='hero px-24 pt-12'>
        <div className='flex items-center justify-between'>
        <div className='w-full max-w-[430px] text-white'>
            <h1 className='text-3xl mb-4'>Ecommerce Shopping web site</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum libero minima iste cum sit consequuntur numquam tenetur est, at, eos soluta quia voluptates quidem adipisci quis dolore aspernatur? Labore, delectus tempora libero voluptate consequatur dicta inventore officia tenetur perferendis sint?</p>
        </div>
        <div>
            <img className='w-full max-w-[750px]' src={HeroImg} alt="" />
        </div>
    </div>
    </section>
  )
}

export default Hero