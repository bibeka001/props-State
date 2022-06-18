//action types
const GM = "GM";
const GA = "GA";

//actions
let gmAction = () => {
  console.log("Test gmAction");
  return { type: GM };
};
let gaAction = () => {
  console.log("Test gaAction");
  return { type: GA };
};
export { gmAction, gaAction, GM, GA };

//An action is a function, which return a actionable objects
