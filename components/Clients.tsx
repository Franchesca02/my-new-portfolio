import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className="py-16" id="testimonials">
      <h1 className="heading">
        Kind Words From{" "}
        <span className="text-purple">Satisfied Clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
        />
        {/* <div className='flex flex-wrap justify-center items-center gap-4 md:gap-16 max-lg mt-10'>
            {companies.map(({ id, name, nameImg, img })=> 
            (
                <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                    <img
                    src={img}
                    alt={name}
                    className='md:w-20 md:h-20 w-12 h-12'
                    />

                    <img
                    src={nameImg}
                    alt={name}
                    className='md:w-20 w-16'
                    />

                </div>
            ))}
        </div> */}
        
        </div>
        </div>
  )
}

export default Clients
