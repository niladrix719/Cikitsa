import React from 'react';
import Lottie from "lottie-react";
import animationData from '../loading.json';

type LoadingProps = {
  bottom: boolean;
};

const LoadingAnimation = ({bottom}: LoadingProps) => {
  return (
    <div className='flex justify-center'>
      <Lottie className={`relative ${bottom ? 'bottom-28' : ''}`} animationData={animationData} loop={true} />
    </div>
  );
};

export default LoadingAnimation;
