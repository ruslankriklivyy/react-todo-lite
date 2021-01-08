import React from 'react';
import preloaderGif from '../assets/img/preloader.gif';

const Preloader = () => {
  return (
    <div className="todo-tasks-preloader">
      <img src={preloaderGif} alt="preloader" />
    </div>
  );
};

export default Preloader;
