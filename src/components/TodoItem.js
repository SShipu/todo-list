import React, { useState, useEffect, useRef } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';

function TodoItem({ todo, order, moveTodo }) {
  const [showMenu, setShowMenu] = useState(false);
  const [dueTime, setDueTime] = useState(todo.dueTime);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (todo.status === 'Ongoing' && dueTime && moment().isAfter(moment(dueTime))) {
      alert(`Task "${todo.title}" is overdue!`);
    }
  }, [dueTime, todo.status]);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMove = (newStatus) => {
    moveTodo(todo.id, newStatus);
    setShowMenu(false);
  };

  const handleDateChange = (date) => {
    setDueTime(date);
  };

  return (
    <div className="todo-item">
        
      <div className="todo-content">
        <div className='todo-item-order'>
            <h4>{order}.</h4>
        </div>
        <div className='todo-item-desc'>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            {todo.status === 'Ongoing' && (
            <Datetime
                value={dueTime}
                onChange={handleDateChange}
                dateFormat="YYYY-MM-DD"
                timeFormat="HH:mm"
            />
            )}
            {todo.status === 'Done' && todo.completedAt && (
            <p>Completed on: {moment(todo.completedAt).format('YYYY-MM-DD HH:mm')}</p>
            )}

        </div>
      </div>
      <div className="todo-header">
        <div className="menu-icon" onClick={handleToggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
            <path d="M256 80c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 80c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 80c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z"/>
          </svg>
        </div>
      </div>
      {showMenu && (
        <div className="context-menu" ref={menuRef}>
          {todo.status !== 'New' && <div onClick={() => handleMove('New')}>Move to New</div>}
          {todo.status !== 'Ongoing' && <div onClick={() => handleMove('Ongoing')}>Move to Ongoing</div>}
          {todo.status !== 'Done' && <div onClick={() => handleMove('Done')}>Move to Done</div>}
        </div>
      )}
    </div>
  );
}

export default TodoItem;

