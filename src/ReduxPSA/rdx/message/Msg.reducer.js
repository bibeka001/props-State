import { GM, GA } from "../message/Msg.action";

let initialState = {
  message: "Hello",
};

let messageReducer = (state = initialState, action) => {
  console.log(action);
  console.log(action.type);

  switch (action.type) {
    case GM:
      return { message: "Good Morning" };
    case GA:
      return { message: "Good Night" };
    default:
      return state;
  }
};

export { messageReducer };

//what is Reducer
//Reducer is a pure function. It take two arguments that are  State and Action
