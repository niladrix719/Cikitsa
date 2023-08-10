import React from 'react';
import Image from 'next/image';

type SymptomProps = {
  symptom: {
    name: string;
    description: string;
    image: string;
  };
};

export const SymptomBox = (props: SymptomProps) => {
  return (
    <div className="bg-white border flex border-gray-300 rounded-3xl items-center shadow-md w-80 h-16 mb-8 cursor-pointer">
      <div className="relative h-full w-40">
        <div className="absolute inset-0">
          <Image
            src={props.symptom.image}
            alt={props.symptom.name}
            layout="fill"
            objectFit="cover"
            className='rounded-l-3xl'
          />
        </div>
      </div>
      <h2 className="text-sm font-semibold p-1 px-2">{props.symptom.name}</h2>
    </div>
  );
};
