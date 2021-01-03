import axios from 'axios';

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const SET_TASKS = 'SET_TASKS';
const EDIT_TASK = 'EDIT_TASK';
const SET_COMPLETED = 'SET_COMPLETED';

export const addTaskAction = (obj) => ({
  type: ADD_TASK,
  payload: obj,
});

export const removeTaskAction = (id) => ({
  type: REMOVE_TASK,
  payload: id,
});

export const editTaskAction = (obj) => ({
  type: EDIT_TASK,
  payload: obj,
});

export const getTasks = () => (dispatch) => {
  axios.get('http://localhost:3001/tasks').then(({ data }) => {
    dispatch(setTasks(data));
  });
};

export const setCompletedTask = (id, completed) => ({
  type: SET_COMPLETED,
  payload: id,
  completed,
});

export const setTasks = (obj) => ({
  type: SET_TASKS,
  payload: obj,
});
