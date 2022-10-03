// reducers
import App from "../../components/App/App.jsx";

import { combineReducers } from "redux";

import { todoAppState } from "../actions/index.js";

import { store } from "../../index.jsx";

export const testAction = {
  type: "TEST_1",
  id: "start id",
  basket: ["sample 1", "sample 2"],
};

const initialState = [
  {
    id: "initialState id",
    basket: ["60d3b41abdacab0026a733c6", "60d3b41abdacab0026a733d0"], // ids
  },
];

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TEST_1":
      console.log("TEST_1");
      return [
        ...state,
        {
          id: "new ID",
          basket: [
            "60d3b41abdacab0026a733c6",
            "60d3b41abdacab0026a733d0",
            "60d3b41abdacab0026a733d2",
          ],
        },
      ];
    case "ADD_ID":
      console.log("ADD_ID");
    // return [{ basket: [basket, action.id] }];
    default:
      console.log("default");
      return state;
  }
};

export const rootReducer = combineReducers({
  testReducer,
});
