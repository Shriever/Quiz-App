import getNewQuestionAndAnswer from "../utils/getNewQuestionAndAnswer";

const showNextQuestion = async state => {
  const { question, answer } = await getNewQuestionAndAnswer();

  return {
    ...state,
    isCorrectAnswer: null,
    isShowAnswer: false,
    question,
    answer,
  };
};

export default showNextQuestion;
