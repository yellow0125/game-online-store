import React from 'react'
import { Image } from 'react-bootstrap'

const Ad = () => {
  return (
    <>
      <Image src={'/images/ad3.jpg'} alt='advertising3' className='mt-2' style={{ width: '100%', borderRadius: '50px' }} />
      <Image src={'/images/ad1.jpg'} alt='advertising1' className='mt-2' style={{ width: '100%', borderRadius: '50px' }} />
      <Image src={'/images/ad2.jpg'} alt='advertising2' className='mt-2' style={{ width: '100%', borderRadius: '50px' }} />
    </>
  )
}

export default Ad