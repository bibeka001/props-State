import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, gaAction } from "../rdx/message/Msg.action";
const Message = () => {
  let dispatch = useDispatch();
  let message = useSelector((state) => {
    return state.message;
  });
  const gmHandler = () => {
    //dispatch an action
    dispatch(gmAction());
  };
  const gaHandler = () => {
    //dispatch an action
    dispatch(gaAction());
  };
  return (
    <div>
      <pre>{JSON.stringify(message)}</pre>
      <h1>Wish:{message.message}</h1>
      <button onClick={gmHandler}>GM</button>
      <button onClick={gaHandler}>GA</button>
    </div>
  );
};

export default Message;
  