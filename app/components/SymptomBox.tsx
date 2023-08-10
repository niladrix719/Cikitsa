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
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md w-80 mb-8">
      <Image
        src={props.symptom.image}
        alt={props.symptom.name}
        width={180}
        height={180}
        className="w-full h-auto mx-auto mb-3"
      />
      <h2 className="text-xl font-semibold mb-2">{props.symptom.name}</h2>
      <p className="text-gray-600">{props.symptom.description}</p>
    </div>
  );
};
