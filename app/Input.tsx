import React, { SetStateAction } from 'react';

export const Input = ({
  error,
  setError,
  onSubmit,
  taskInput,
  setTaskInput
}: {
  error: string;
  setError: React.Dispatch<SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  taskInput: string;
  setTaskInput: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <form
      className='relative'
      onSubmit={onSubmit}>
      <label
        htmlFor='new'
        className='sr-only'>
        Create a new todo
      </label>
      <div className='absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 rounded-full border-[1px] border-light-complete dark:border-dark-inactive md:left-[1.35rem] md:h-6 md:w-6'></div>
      <input
        className={`w-full rounded-component bg-light-element px-5 py-3.5 indent-8 text-todo-m dark:bg-dark-element md:py-[1.125rem] md:px-[1.375rem] md:indent-12 md:text-todo-d ${
          error
            ? 'outline-error placeholder:text-error'
            : 'outline-primary placeholder:text-light-complete dark:placeholder:text-dark-inactive'
        }`}
        type='text'
        name='new'
        id='new'
        placeholder={
          error ? 'Enter a non-empty todo...' : 'Create a new todo...'
        }
        value={taskInput}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTaskInput(e.target.value);
          setError('');
        }}
      />
    </form>
  );
};
