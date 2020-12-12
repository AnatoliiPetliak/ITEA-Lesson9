import {
  REMOVE_TODO,
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_LOCALE,
} from "../constants/index";
import config from "../config";

const initState = {
  locale: config.defaultLang,
  todos: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.payload) {
            return {
              ...t,
              completed: !action.completed,
            };
          } else {
            return t;
          }
        }),
      };
    default:
      return state;
  }
};

export default reducer;
