'use client'
import QnABox from "../components/QnABox";
import React, { useState } from 'react';

const Qna = () => {
  const [questionNumber, setQuestionNumber] = useState(1);

  return (
    <div className="mt-36">
      {questionNumber === 1 && (
        <QnABox
          id={1}
          opt1="Less than a week"
          opt2="More than a week"
          question="Question 1: How long have you been experiencing the cough?"
          setQuestionNumber={setQuestionNumber}
        />
      )}

      {questionNumber === 2 && (
        <QnABox
          id={2}
          opt1="No"
          opt2="Yes"
          question="Question 2: Have you noticed any unexplained weight loss recently?"
          setQuestionNumber={setQuestionNumber}
        />
      )}

      {questionNumber === 3 && (
        <QnABox
          id={3}
          opt1="Moderate fatigue"
          opt2="Severe fatigue"
          question="Question 3: How would you describe your level of fatigue?"
          setQuestionNumber={setQuestionNumber}
        />
      )}

      {questionNumber === 4 && (
        <QnABox
          id={4}
          opt1="No"
          opt2="Yes"
          question="Question 4: Are you experiencing shortness of breath during physical activities?"
          setQuestionNumber={setQuestionNumber}
        />
      )}
    </div>
  );
};

export default Qna;