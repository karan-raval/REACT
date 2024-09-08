import { legacy_createStore } from "redux";

let initial = {
  isLogin: false,
  user: null,
  isError: false,
  isLoading: false,
};

const reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        user: payload,
        isLogin: true,
        isLoading: false,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export function fetchapi(data, email) {
  data({ type: "LOADING" });
  fetch(`https://mock-server-app2-dll0.onrender.com/user?email=${email}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      data({ type: "SUCCESS", payload: res });
    })
    .catch((err) => {
      console.log(err);
      data({ type: "ERROR" });
    });
}

export const store = legacy_createStore(reducer);