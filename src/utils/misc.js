const calcNewScore = (state, isCorrectAnswer) => {
  const { playerScore, question } = state;
  return isCorrectAnswer ? playerScore + question.value : playerScore;
};

const getNewQuestion = () => {
  return { text: "This is a new question?", value: 500 };
};

module.exports = { calcNewScore, getNewQuestion };
