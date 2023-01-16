import React, { SetStateAction } from 'react';

export const TextInput = ({
  title,
  setTitle
}: {
  title: string;
  setTitle: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <label
        htmlFor='title'
        className='sr-only'>
        Enter a todo list title
      </label>
      <input
        className='w-full rounded-component border-[1px] border-light-complete bg-light-bg px-5 py-3.5 text-todo-m outline-primary dark:border-dark-inactive dark:bg-dark-bg md:py-[1.125rem] md:px-[1.375rem] md:text-todo-d'
        type='text'
        name='title'
        id='title'
        placeholder='Enter a todo list title...'
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        }}
      />
    </>
  );
};
