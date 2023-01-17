import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState, useEffect } from 'react';
import { TodoDetails } from './TodoDetails';
import { ITodo } from './(todo)/demo/page';
import { TodoItem } from './TodoItem';

export const TodoList = ({
  filter,
  setFilter,
  tasks,
  setTasks,
  filteredTasks,
  toggleItem,
  deleteItem,
  deleteCompletedItems
}: {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  tasks: ITodo[];
  setTasks: React.Dispatch<React.SetStateAction<ITodo[]>>;
  filteredTasks: ITodo[];
  toggleItem: (e: React.MouseEvent<HTMLInputElement>) => void;
  deleteItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
  deleteCompletedItems: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [width, setWidth] = useState(767);

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);

      const handleResizeWindow: any = () => setWidth(window.innerWidth);

      window.addEventListener('resize', handleResizeWindow);
      return () => {
        window.removeEventListener('resize', handleResizeWindow);
      };
    }
  }, []);

  const onDragEnd = (result: any) => {
    if (!result.destination || filter !== 'all') {
      return;
    }

    const newTasks = [...tasks];
    const [removed] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, removed);
    setTasks(newTasks);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId='todo'
          type='task'>
          {(provided, snapshot) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className='mt-4 overflow-hidden rounded-component bg-light-element shadow-2xl shadow-light-shadow dark:bg-dark-element dark:shadow-dark-shadow md:mt-6'>
              {filteredTasks.map((task, idx) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id}
                  index={idx}>
                  {(provided, snapshot) => (
                    <div
                      className='border-light-complete dark:border-dark-inactive [&:not(:last-child)]:border-b-[1px]'
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}>
                      <TodoItem
                        key={task.id}
                        id={task.id}
                        task={task.task}
                        completed={task.completed}
                        toggleItem={toggleItem}
                        deleteItem={deleteItem}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              <TodoDetails
                items={tasks.filter(task => !task.completed).length}
                deleteCompletedItems={deleteCompletedItems}>
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
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
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
