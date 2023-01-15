import Image from 'next/image';
import React from 'react';
import { ITodo } from './page';

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
    <li className='border-light-complete dark:border-dark-inactive [&:not(:last-child)]:border-b-[1px]'>
      <div className='group flex items-center gap-4 px-5 md:gap-6 md:px-[1.375rem]'>
        <input
          className='peer'
          type='checkbox'
          name={id}
          id={id}
          onClick={e => toggleItem(e)}
          onChange={() => {}}
          checked={completed}
        />
        <label
          htmlFor={id}
          className='flex w-full cursor-pointer items-center py-3.5 group-hover:text-light-hover peer-checked:text-light-complete peer-checked:line-through dark:group-hover:text-dark-hover dark:peer-checked:text-dark-inactive'>
          {task}
        </label>
        <button
          type='button'
          onClick={e => deleteItem(e)}
          className='hidden text-light-inactive hover:text-light-hover group-hover:inline-block dark:text-dark-inactive dark:hover:text-dark-hover'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'>
            <path
              fill='currentColor'
              fill-rule='evenodd'
              d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
            />
          </svg>
        </button>
      </div>
    </li>
  );
};
