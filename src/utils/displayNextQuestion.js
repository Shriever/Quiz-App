import getNewQuestionAndAnswer from "./getNewQuestionAndAnswer";

const displayNextQuestion = async setState => {
  const { question, answer } = await getNewQuestionAndAnswer();

  setState(prevState => {
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
