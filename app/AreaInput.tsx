import React, { SetStateAction } from 'react';

export const AreaInput = ({
  description,
  setDescription
}: {
  description: string;
  setDescription: React.Dispatch<SetStateAction<string>>;
}) => {
  return (
    <>
      <label
        htmlFor='description'
        className='sr-only'>
        Enter a todo list description
      </label>
      <textarea
        className='w-full resize-none rounded-component border-[1px] border-light-complete bg-light-bg px-5 py-3.5 text-todo-m outline-primary dark:border-dark-inactive dark:bg-dark-bg md:py-[1.125rem] md:px-[1.375rem] md:text-todo-d'
        name='description'
        id='description'
        placeholder='Enter a todo list description...'
        rows={4}
        value={description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          setDescription(e.target.value);
        }}
      />
    </>
  );
};
