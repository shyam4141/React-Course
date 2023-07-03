// import { combineReducers } from "redux";

// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });


// export default rootReducer;















import { combineReducers } from "redux";

const initialState = {
  counter: {
    value: 0,
  },
  user: {
    name: "",
    email: "",
  },
  data:[]
};

const counterReducer = (state = initialState.counter, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const dataReducer = (state = initialState.data, action) => {
    switch (action.type) {
      case "ADD_DATA":
        return { ...state, posts: action.payload };
      default:
        return state;
    }
  };

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  data: dataReducer
});

 export default rootReducer;

