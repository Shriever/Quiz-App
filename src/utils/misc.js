const calcNewScore = (state, isCorrectAnswer) => {
  const { playerScore, question } = state;
  return isCorrectAnswer ? playerScore + question.value : playerScore;
};

const getNewQuestionAndAnswer = () => {
  const question = { text: "This is a new question?", value: 500 };
  const answer = "It's Chuck Norris!";
  return { question, answer };
};

module.exports = { calcNewScore, getNewQuestionAndAnswer };
