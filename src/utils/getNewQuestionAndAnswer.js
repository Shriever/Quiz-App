const getNewQuestionAndAnswer = async () => {
  const res = await fetch("https://jservice.io/api/random");
  const data = await res.json();

  const { question, answer, value } = data[0];

  return { question: { text: question, value }, answer };
};

export default getNewQuestionAndAnswer;
