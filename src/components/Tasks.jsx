import React from 'react';

import trashSvg from '../assets/img/trash.svg';
import editSvg from '../assets/img/edit.svg';

const Tasks = ({ tasks, onEditTask, onRemoveTask, onHandleCompleted }) => {
  const removeTask = (id) => {
    onRemoveTask(id);
  };

  const editTask = (id) => {
    const text = prompt('Введите текст задачи: ');

    if (!text) {
      return;
    }

    const obj = {
      id,
      task: text,
    };
    onEditTask(obj);
  };

  const handleChecked = (id, completed) => {
    onHandleCompleted(id, completed);
  };

  return !tasks ? (
    <div>Загрузка...</div>
  ) : (
    tasks.map(({ task, id, completed }) => (
      <div key={id} className="todo-tasks">
        <div className="todo-tasks-item">
          <input
            onChange={(e) => handleChecked(id, e.target.checked)}
            id={`task-${id}`}
            type="checkbox"
            checked={completed}
          />
          <label htmlFor={`task-${id}`}>
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </label>
          <span className={completed ? 'todo-tasks-done' : null}>{task}</span>
          <div className="todo-tasks-item__action">
            <img onClick={() => editTask(id)} src={editSvg} alt="edit svg" />
            <img onClick={() => removeTask(id)} src={trashSvg} alt="trash svg" />
          </div>
        </div>
      </div>
    ))
  );
};

export default Tasks;
