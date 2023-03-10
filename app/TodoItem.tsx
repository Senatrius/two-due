import React from 'react';

export const TodoItem = ({
  id,
  task,
  completed,
  toggleItem,
  deleteItem
}: {
  id: string;
  task: string;
  completed: boolean;
  toggleItem: (e: React.MouseEvent<HTMLInputElement>) => void;
  deleteItem: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <li className='bg-light-element dark:bg-dark-element'>
      <div className='group flex items-center gap-4 px-5 md:gap-6 md:px-[1.375rem]'>
        <input
          className='peer h-5 w-5 shrink-0 appearance-none whitespace-nowrap rounded-full border-[1px] border-light-complete bg-center bg-no-repeat checked:bg-primary checked:bg-hero-pattern dark:border-dark-inactive md:h-6 md:w-6'
          type='checkbox'
          name={id}
          id={id}
          onClick={e => toggleItem(e)}
          onChange={() => {}}
          checked={completed}
        />
        <label
          htmlFor={id}
          className='flex w-full cursor-pointer items-center py-3.5 group-hover:text-light-hover peer-checked:text-light-complete peer-checked:line-through dark:group-hover:text-dark-hover dark:peer-checked:text-dark-inactive md:py-4'>
          {task}
        </label>
        <button
          type='button'
          id={id + '0'}
          onClick={e => deleteItem(e)}
          className='hidden text-light-inactive hover:text-light-hover group-hover:inline-block dark:text-dark-inactive dark:hover:text-dark-hover'>
          <svg
            className='pointer-events-none'
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'>
            <path
              fill='currentColor'
              fillRule='evenodd'
              d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
            />
          </svg>
        </button>
      </div>
    </li>
  );
};
