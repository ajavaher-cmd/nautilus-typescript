import { UPDATE } from "./actionTypes";
import { ADD } from "./actionTypes";
import { SUBTRACT } from "./actionTypes";
import { MULTIPLY } from "./actionTypes";
import { DIVIDE } from "./actionTypes";
import { CLEAR } from "./actionTypes";
import { EQUAL } from "./actionTypes";

/*actions below pass operation through to reducer, update has input to update the display field.
 others require no data to be passed. */

export const updateDisplay = (content: any) => ({
  type: UPDATE, 
  payload: {
    input: content,
    operation: "num"
  }
})

export const addition = () => ({
  type: ADD,
  payload: {
    operation: "operator"
  }
});

export const subtraction = () => ({
  type: SUBTRACT,
  payload: {
    operation: "operator"
  }
})

export const multiplication = () => ({
  type: MULTIPLY,
  payload: {
    operation: "operator"
  }
});

export const division = () => ({
  type: DIVIDE,
  payload: {
    operation: "operator"
  }
});

export const clearDisplay = () => ({
  type: CLEAR,
  payload: {
    operation: "clear"
  }
})

export const equal = () => ({
  type: EQUAL,
  payload: {
    operation: "equal"
  }
})