'use client'
import QnABox from "../components/QnABox";
import React, { useState } from 'react';
import LoadingAnimation from "../components/LoadingAnimation";
import { useEffect } from "react";

const Qna = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="mt-36">
      {isLoading && <LoadingAnimation bottom={true} />}
      {!isLoading && questionNumber === 1 && (
        <QnABox
          id={1}
          opt1="Less than a week"
          opt2="More than a week"
          question="Question 1: How long have you been experiencing the current symptoms?"
          setQuestionNumber={setQuestionNumber}
        />
      )}

      {!isLoading && questionNumber === 2 && (
        <QnABox
          id={2}
          opt1="No"
          opt2="Yes"
          question="Question 2: Are you a current smoker?"
          setQuestionNumber={setQuestionNumber}
        />
      )}

      {!isLoading && questionNumber === 3 && (
        <QnABox
          id={3}
          opt1="Less than a year"
          opt2="More than a year"
          question="Question 3: If you smoke, how long have you been exposed to smoking?"
          setQuestionNumber={setQuestionNumber}
        />
      )}

      {!isLoading && questionNumber === 4 && (
        <QnABox
          id={4}
          opt1="No"
          opt2="Yes"
          question="Question 4: Have you observed any recent unexplained weight loss?"
          setQuestionNumber={setQuestionNumber}
        />
      )}

      {!isLoading && questionNumber === 5 && (
        <QnABox
          id={5}
          opt1="Moderate fatigue"
          opt2="Severe fatigue"
          question="Question 5: How would you characterize your level of fatigue?"
          setQuestionNumber={setQuestionNumber}
        />
      )}

      {!isLoading && questionNumber === 6 && (
        <QnABox
          id={6}
          opt1="No"
          opt2="Yes"
          question="Question 6: Are you experiencing shortness of breath during physical activities?"
          setQuestionNumber={setQuestionNumber}
        />
      )}
    </div>
  );
};

export default Qna;