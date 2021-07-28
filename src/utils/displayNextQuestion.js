import { getNewQuestionAndAnswer } from "./misc";

const displayNextQuestion = setState => {
  setState(prevState => {
    const { question, answer } = getNewQuestionAndAnswer();
    return {
      ...prevState,
      isCorrectAnswer: null,
      question,
      answer,
      isShowAnswer: false,
    };
  });
};

export default displayNextQuestion;
