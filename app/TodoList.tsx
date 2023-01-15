import { useState, useEffect } from 'react';
import { TodoDetails } from './TodoDetails';
import { Droppable } from 'react-beautiful-dnd';
import { ITodo } from './page';
import { TodoItem } from './TodoItem';

export const TodoList = ({
  filter,
  setFilter,
  tasks,
  filteredTasks,
  toggleItem
}: {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  tasks: ITodo[];
  filteredTasks: ITodo[];
  toggleItem: (e: React.MouseEvent<HTMLInputElement>) => void;
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  return (
    <>
      <ul className=' mt-4 rounded-component bg-light-element shadow-2xl shadow-light-shadow dark:bg-dark-element dark:shadow-dark-shadow md:mt-6'>
        {filteredTasks.map(task => (
          <TodoItem
            key={task.id}
            id={task.id}
            task={task.task}
            completed={task.completed}
            onClick={toggleItem}
          />
        ))}
        <TodoDetails items={tasks.filter(task => !task.completed).length}>
          {width >= 767 && (
            <ul className='dark:text-dark-complete flex items-center gap-4 text-controls text-light-inactive'>
              <li
                className={`${
                  filter === 'all' && 'text-primary'
                } hover:text-light-hover hover:dark:text-dark-hover`}>
                <button
                  onClick={() => setFilter('all')}
                  type='button'>
                  All
                </button>
              </li>
              <li
                className={`${
                  filter === 'active' && 'text-primary'
                } hover:text-light-hover hover:dark:text-dark-hover`}>
                <button
                  onClick={() => setFilter('active')}
                  type='button'>
                  Active
                </button>
              </li>
              <li
                className={`${
                  filter === 'completed' && 'text-primary'
                } hover:text-light-hover hover:dark:text-dark-hover`}>
                <button
                  onClick={() => setFilter('completed')}
                  type='button'>
                  Completed
                </button>
              </li>
            </ul>
          )}
        </TodoDetails>
      </ul>
      {width < 767 && (
        <div className='mt-4 flex items-center justify-center rounded-component bg-light-element py-3.5 px-5 shadow-2xl shadow-light-shadow dark:bg-dark-element dark:shadow-dark-shadow '>
          <ul className='dark:text-dark-complete mx-auto flex items-center gap-4 text-controls text-light-inactive'>
            <li
              className={`${
                filter === 'all' && 'text-primary'
              } hover:text-light-hover hover:dark:text-dark-hover`}>
              <button
                onClick={() => setFilter('all')}
                type='button'>
                All
              </button>
            </li>
            <li
              className={`${
                filter === 'active' && 'text-primary'
              } hover:text-light-hover hover:dark:text-dark-hover`}>
              <button
                onClick={() => setFilter('active')}
                type='button'>
                Active
              </button>
            </li>
            <li
              className={`${
                filter === 'completed' && 'text-primary'
              } hover:text-light-hover hover:dark:text-dark-hover`}>
              <button
                onClick={() => setFilter('completed')}
                type='button'>
                Completed
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
