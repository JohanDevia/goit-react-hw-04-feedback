import React, { useState } from 'react';
import { FeedbackContainer, FeedbackButton } from './Feedbacks.styled';

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = feedback => {
    setFeedbacks(prevState => ({
      ...prevState,
      [feedback]: prevState[feedback] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbacks;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedbacks;
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <FeedbackContainer>
      <h3>Please leave feedback</h3>
      <div>
        <FeedbackButton onClick={() => handleFeedbackClick('good')}>
          Good
        </FeedbackButton>
        <FeedbackButton onClick={() => handleFeedbackClick('neutral')}>
          Neutral
        </FeedbackButton>
        <FeedbackButton onClick={() => handleFeedbackClick('bad')}>
          Bad
        </FeedbackButton>
      </div>
      <div>
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <div>
            <h3>Statistic</h3>
            <p>·Good: {feedbacks.good}</p>
            <p>·Neutral: {feedbacks.neutral}</p>
            <p>·Bad: {feedbacks.bad}</p>
            <p>·Total: {totalFeedback}</p>
            <p>·Positive feedback: {positivePercentage}%</p>
          </div>
        )}
      </div>
    </FeedbackContainer>
  );
};

const Notification = ({ message }) => <p>{message}</p>;

export default Feedbacks;
