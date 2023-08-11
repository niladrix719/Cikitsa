import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='flex flex-col items-center p-4'>
        <Image src='https://img.freepik.com/premium-photo/doctor-looks-hologram-lungs-checks-test-result-virtual-interface-analyzes-data-pneumonia-donation-innovative-technologies-medicine-future_99433-6562.jpg?w=740' alt='Lung-Cancer' width={500} height={500} />
        <h1 className='text-3xl font-semibold mt-8 mb-8'>You have a 72% chance of having lung cancer.</h1>
        <div>
            <button className='bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2 rounded-md mr-2 mb-2'>See prevention methods</button>
            <button className='bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2 rounded-md mr-2 mb-2'>Contact a Doctor</button>
        </div>
    </div>
  )
}

export default page