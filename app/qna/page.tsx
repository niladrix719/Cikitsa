'use client'
import QnABox from "../components/QnABox";
import React, { useState } from 'react';

const Qna = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  return (
    <div>
        {questionNumber === 1 && <QnABox setQuestionNumber={setQuestionNumber} />}
    </div>
  );
};

export default Qna;