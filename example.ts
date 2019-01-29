import si from "seamless-immutable";

type State = si.Immutable<{
  myProp: number;
}>;

export const myReducer = (state: State = si({ myProp: 1 })): State => {
  // This should give an error because "myProp" expects a number, but is
  // being set to a string.
  return state.set("myProp", "wrong value type");
};

type StateWithout = {
  myProp: number;
};

export const myReducerWithoutSeamless = (
  state: StateWithout = { myProp: 1 }
): StateWithout => {
  // Correctly gives an error:
  // Type '"wrong type"' is not assignable to type 'number'.
  state["myProp"] = "wrong type";
  return state;
};
