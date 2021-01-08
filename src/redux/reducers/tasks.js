const initialState = {
  items: [],
  isLoading: false,
};

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const SET_TASKS = 'SET_TASKS';
const EDIT_TASK = 'EDIT_TASK';
const SET_COMPLETED = 'SET_COMPLETED';
const SET_LOADING = 'SET_LOADING';

const addTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case SET_COMPLETED: {
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.completed = action.payload.completed;
        }
        return item;
      });

      return {
        ...state,
        items: [...state.items],
      };
    }

    case EDIT_TASK:
      state.items.map((item) => {
        if (item.id === action.payload.id) {
          item.task = action.payload.task;
        }
        return state.items;
      });

      return {
        ...state,
        items: [...state.items],
      };
    case REMOVE_TASK: {
      const newItems = state.items.filter((item) => item.id !== action.payload);

      return {
        ...state,
        items: newItems,
      };
    }
    case SET_TASKS:
      return {
        ...state,
        items: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
};

export default addTaskReducer;
