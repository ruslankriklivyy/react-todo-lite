import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAction, editTaskAction, removeTaskAction, getTasks } from '../redux/actions/tasks';
import axios from 'axios';
import { setCompletedTask } from '../redux/actions/tasks';

import { AddTasks, Tasks, Preloader } from '../components';

const Todo = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ tasks }) => tasks.items);
  const isLoading = useSelector(({ tasks }) => tasks.isLoading);

  React.useEffect(() => {
    dispatch(getTasks());
  }, []);

  const onAddTask = (obj) => {
    axios
      .post('tasks', {
        task: obj.task,
        completed: obj.completed,
      })
      .then(({ data }) => {
        dispatch(addTaskAction(data));
      });
  };

  const onEditTask = (obj) => {
    axios
      .patch('tasks/' + obj.id, {
        task: obj.task,
      })
      .then(({ data }) => {
        dispatch(editTaskAction(data));
      });
  };

  const onRemoveTask = (id) => {
    axios.delete('tasks/' + id);
    dispatch(removeTaskAction(id));
  };

  const onHandleCompleted = (id, completed) => {
    axios.patch('tasks/' + id, {
      completed,
    });
    dispatch(setCompletedTask({ id, completed }));
  };

  return (
    <div className="todo">
      <div className="container">
        <div className="header">Список задач</div>
        <AddTasks onAddTask={onAddTask} />
        {isLoading ? (
          <Preloader />
        ) : (
          <Tasks
            tasks={items}
            onEditTask={onEditTask}
            onRemoveTask={onRemoveTask}
            onHandleCompleted={onHandleCompleted}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
