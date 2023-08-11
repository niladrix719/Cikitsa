'use client'
import React, { useState } from 'react';
import Link from 'next/link';

type QnAProps = {
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  question: string;
  opt1: string;
  opt2: string;
  id: number;
};

const QnABox = (props: QnAProps) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setInputValue(option);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSelectedOption('');
  };

  return (
    <div className='flex flex-col items-center p-4'>
      <h2 className='text-3xl font-semibold mb-8'>{props.question}</h2>
      <div className='options'>
        <button
          className={`bg-gray-200 hover:bg-gray-300 text-gray-700 px-16 py-2 rounded-md mr-2 mb-2 ${selectedOption === props.opt1 ? 'bg-gray-300' : ''}`}
          onClick={() => handleOptionClick(props.opt1)}
        >
          {props.opt1}
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 text-gray-700 px-16 py-2 rounded-md mr-2 mb-2 ${selectedOption === props.opt2 ? 'bg-gray-300' : ''}`}
          onClick={() => handleOptionClick(props.opt2)}
        >
          {props.opt2}
        </button>
      </div>
      <div className='relative mt-4'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          className='border-b-2 border-black w-96 px-2 py-2 focus:outline-none'
        />
        {props.id <= 5 && <span onClick={() => props.setQuestionNumber(props.id + 1)} className='cursor-pointer text-2xl'>&gt;</span>}
        {props.id === 6 && <Link href='/results' className='cursor-pointer text-2xl'>&gt;</Link>}
      </div>
    </div>
  );
};

export default QnABox;
