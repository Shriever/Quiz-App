const handleShowAnswer = setState => {
  setState(prevState => {
    return { ...prevState, isShowAnswer: true };
  });
};

export default handleShowAnswer;
