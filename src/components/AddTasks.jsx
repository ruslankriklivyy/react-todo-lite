import React from 'react';

import plusSvg from '../assets/img/plus.svg';

const AddTasks = ({ onAddTask }) => {
  const [inputValue, setInputValue] = React.useState('');

  const changeInputValue = (value) => {
    setInputValue(value);
  };

  const addTask = () => {
    if (!inputValue) {
      alert('Введите текст задачи');
      return;
    }
    const obj = { task: inputValue, completed: false };
    onAddTask(obj);
    setInputValue('');
  };

  return (
    <div className="todo-input">
      <input
        onChange={(e) => changeInputValue(e.target.value)}
        type="text"
        placeholder="Введите текст задачи..."
        value={inputValue}
      />
      <img onClick={addTask} src={plusSvg} alt="plus svg" />
    </div>
  );
};

export default AddTasks;
