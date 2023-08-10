'use client'
import React, { useState } from 'react';

type QnAProps = {
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
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
      <h2 className='text-3xl font-semibold mb-8'>Question 1: How long have you been experiencing the headache?</h2>
      <div className='options'>
        <button
          className={`bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 mb-2 ${selectedOption === 'Less than a day' ? 'bg-gray-300' : ''}`}
          onClick={() => handleOptionClick('Less than a day')}
        >
          Less than a day
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2 mb-2 ${selectedOption === 'More than a day' ? 'bg-gray-300' : ''}`}
          onClick={() => handleOptionClick('More than a day')}
        >
          More than a day
        </button>
      </div>
      <div className='relative mt-4'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          className='border-b-2 border-black w-96 px-2 py-2 focus:outline-none'
        />
        <div className='absolute top-1/2 transform -translate-y-1/2 right-[-1.1rem] text-gray-700 pointer-events-none'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default QnABox;
