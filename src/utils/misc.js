const calcNewScore = (state, isCorrectAnswer) => {
  const { playerScore, question } = state;
  return isCorrectAnswer ? playerScore + question.value : playerScore;
};

const getNewQuestionAndAnswer = async () => {
  const res = await fetch("https://jservice.io/api/random");
  const data = await res.json();

  const { question, answer, value } = data[0];

  return { question: { text: question, value }, answer };
};

module.exports = { calcNewScore, getNewQuestionAndAnswer };
