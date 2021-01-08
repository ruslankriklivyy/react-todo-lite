import axios from 'axios';

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const SET_TASKS = 'SET_TASKS';
const EDIT_TASK = 'EDIT_TASK';
const SET_COMPLETED = 'SET_COMPLETED';
const SET_LOADING = 'SET_LOADING';

export const setIsLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

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
  dispatch(setIsLoading(true));
  axios
    .get('tasks')
    .then(({ data }) => {
      dispatch(setTasks(data));
    })
    .catch(() => {
      alert('Не удалось загрузить список задач');
    })
    .finally(() => {
      dispatch(setIsLoading(false));
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
