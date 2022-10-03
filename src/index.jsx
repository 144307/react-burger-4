import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";
import { rootReducer } from "./services/reducers/index.js";

import { Provider } from "react-redux";

export const store = createStore(rootReducer);

// const mapStateToProps = (store) => {
//   return {
//     step: store.step,
//     theme: store.appearance.theme,
//     totalPrice: store.cart.items.reduce((acc, item) => acc + item.price, 0),
//     user: store.account.userData,
//   };
// };

const root = ReactDOM.createRoot(
  document.getElementById("root") // as HTMLElement
);
root.render(
  // <React.StrictMode store={store}>
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
