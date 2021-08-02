import initialState from "./../utils/initialState";
import playerResponse from "./playerResponse";
import showAnswer from "./showAnswer";
import showNextQuestion from "./showNextQuestion";

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ANSWER":
      return showAnswer(state);

    case "PLAYER_RESPONSE":
      return playerResponse(state, action);

    case "SHOW_NEXT_QUESTION":
      return showNextQuestion(state);

    default:
      return state;
  }
};

export default reducer;
