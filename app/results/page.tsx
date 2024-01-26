'use client';
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import LoadingAnimation from "../components/LoadingAnimation";
import Link from 'next/link';

function Results() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {!isLoading && <div className='flex flex-col items-center p-4 px-32'>
        <Image src='https://img.freepik.com/premium-photo/doctor-looks-hologram-lungs-checks-test-result-virtual-interface-analyzes-data-pneumonia-donation-innovative-technologies-medicine-future_99433-6562.jpg?w=740' alt='Lung-Cancer' width={500} height={500} />
        <h1 className='text-3xl font-semibold mt-8 mb-8'>There is an estimated 72% likelihood of developing lung cancer in the future.</h1>
        <p className='text-xl font-semibold mb-8'>Possible Cause: Prolonged history of smoking.</p>
        <p className='mb-8'>Based on your extended period of smoking, it is essential to be aware of the significant risk factors associated with this habit. Smoking has been closely linked to the development of lung cancer, and the cumulative effects over time contribute to this elevated probability. It&apos;s crucial to consider taking proactive measures to address this risk, such as seeking medical advice, adopting a smoking cessation plan, and undergoing regular health screenings to detect any potential early signs of lung cancer.</p>
        <div>
          <Link href='/preventions' className='bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2 rounded-md mr-2 mb-2'>See prevention methods</Link>
          <button className='bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-2 rounded-md mr-2 mb-2'>Contact a Doctor</button>
        </div>
      </div>}
      {isLoading && <LoadingAnimation bottom={false} />}
    </>
  )
}

export default Results
