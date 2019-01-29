# typescript-seamless-immutable-ex

The following example gives 0 errors, but I expect an error:

```
import si from "seamless-immutable";

type State = si.Immutable<{
  myProp: number;
}>;

export const myReducer = (state: State = si({ myProp: 1 })): State => {
  // This should give an error because "myProp" expects a number, but is
  // being set to a string.
  return state.set("myProp", "wrong value type");
};
```
