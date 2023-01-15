import { TodoDetails } from './TodoDetails';

export const TodoList = ({
  filter,
  setFilter,
  tasks,
  children
}: {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  tasks: number;
  children: React.ReactNode;
}) => {
  return (
    <>
      <ul className=' mt-4 rounded-component bg-light-element shadow-2xl shadow-light-shadow dark:bg-dark-element dark:shadow-dark-shadow md:mt-6'>
        {children}
        <TodoDetails items={tasks}>
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
        </TodoDetails>
      </ul>
    </>
  );
};
