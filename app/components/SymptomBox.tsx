'use client'
import React from 'react';
import Image from 'next/image';
import { AiFillCheckCircle } from 'react-icons/ai';


type SymptomProps = {
  symptom: {
    name: string;
    description: string;
    image: string;
  };
};

const checkStyle = {
  color: '#4E80EE',
  fontSize: '1.2rem',
  position: 'absolute',
  top: '3px',
  right: '4px'
}

export const SymptomBox = (props: SymptomProps) => {
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <div 
      className={isSelected ? "bg-white border flex justify-between border-gray-300 rounded-2xl overflow-hidden items-center shadow-md w-80 h-16 mb-8 cursor-pointer option clicked"
      :
       "bg-white border flex justify-between border-gray-300 rounded-2xl overflow-hidden items-center shadow-md w-80 h-16 mb-8 cursor-pointer option"}
       onClick={() => setIsSelected(!isSelected)}
      >
      <div className="relative h-full w-40">
        <div className="absolute inset-0">
          <Image
            src={props.symptom.image}
            alt={props.symptom.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <h2 className="text-sm font-semibold p-1 px-2 whitespace-nowrap h-full flex items-center relative">
        {props.symptom.name}
        {isSelected && <AiFillCheckCircle style={checkStyle}/>}
        
        </h2>
    </div>
  );
};
