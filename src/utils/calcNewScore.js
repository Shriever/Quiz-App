const calcNewScore = (state, isCorrectAnswer) => {
  const { playerScore, question } = state;
  return isCorrectAnswer ? playerScore + question.value : playerScore;
};

export default calcNewScore;