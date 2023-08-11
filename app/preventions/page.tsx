'use client'
import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import LoadingAnimation from '../components/LoadingAnimation';

function Preventions() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="bg-gray-100 flex justify-evenly h-5/6">
      {isLoading && <LoadingAnimation bottom={true} />}
      {!isLoading && <div className='p-8'>
        <h1 className="text-4xl font-bold mb-6">Lung Cancer Prevention</h1>
        <p className="text-xl mb-4">
          Lung cancer is a serious disease, but there are steps you can take to reduce your risk:
        </p>
        <ul className="list-disc ml-8 mb-4 text-xl">
          <li>Avoid smoking and tobacco products.</li>
          <li>Avoid exposure to secondhand smoke.</li>
          <li>Limit exposure to pollutants and chemicals that can contribute to lung cancer.</li>
          <li>Eat a healthy diet rich in fruits and vegetables.</li>
          <li>Stay physically active and maintain a healthy weight.</li>
          <li>Protect yourself from radon exposure.</li>
          <li>Get regular exercise and stay physically active.</li>
          <li>Consider regular check-ups and screenings if you're at high risk.</li>
        </ul>
        <p className="text-xl mb-0">
          Remember, making healthy lifestyle choices can significantly lower your risk of developing lung cancer.
        </p>
        <h1 className="text-xl font-bold mb-6 mt-8">Medications</h1>
        <div className='flex'>
          <Image src='/med1.png' alt='medicine' width={60} height={60} />
          <Image src='/med2.png' alt='medicine' width={100} height={100} />
        </div>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 mt-10 py-2 rounded-md mr-2 mb-2">Contact a Doctor</button>
      </div>}
      {!isLoading && <div>
        <Image
          className='h-1/2 w-auto'
          src="https://img.freepik.com/free-photo/hands-with-lungs-shape_23-2148533078.jpg?w=740&t=st=1691762102~exp=1691762702~hmac=64d8b8035a0bf3ea76860e6b629b0aaa1c08a15e3c15305f032a252ce73d4458"
          alt='lungs' width={500} height={500}
        />
      </div>}
    </div>
  );
}

export default Preventions;
