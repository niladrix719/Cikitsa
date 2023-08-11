import React from 'react'
import Image from 'next/image'

function Improve() {
  return (
    <div className='flex flex-col items-center'>
      <Image src='https://cdn-icons-png.flaticon.com/512/1242/1242434.png?w=740&t=st=1691765665~exp=1691766265~hmac=cfa923c2b8a6896608fb3e4ae455517169b03bf9ac47e223028308ae8ffa8a7d'
        alt='upload' width={500} height={500}
      />
      <button className='bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2 text-2xl mb-16 rounded-md mr-2 mb-2'>Upload CSV File</button>
      <p className='text-2xl'>Help us improve our predictions.Upload a csv file with your own data</p>
    </div>
  )
}

export default Improve