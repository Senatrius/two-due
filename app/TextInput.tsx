import React, { SetStateAction } from 'react';

export const TextInput = ({
  title,
  setTitle,
  error,
  setError
}: {
  title: string;
  setTitle: React.Dispatch<SetStateAction<string>>;
  error: string;
  setError: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <label
        htmlFor='title'
        className='sr-only'>
        Enter a todo list title
      </label>
      <input
        className={`w-full rounded-component border-[1px] bg-light-bg px-5 py-3.5 text-todo-m ${
          error !== ''
            ? 'border-error outline-error placeholder:text-error'
            : 'border-light-complete outline-primary dark:border-dark-inactive dark:placeholder:text-dark-inactive'
        }
        placeholder:text-light-complete dark:bg-dark-bg md:py-[1.125rem] md:px-[1.375rem] md:text-todo-d`}
        type='text'
        name='title'
        id='title'
        placeholder={error !== '' ? error : 'Create a new todo...'}
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
          setError('');
        }}
      />
    </>
  );
};
