'use client';

import FocusTrap from 'focus-trap-react';
import { useEffect, useState } from 'react';
import { AreaInput } from '../AreaInput';
import { NewTodoButton } from '../NewTodoButton';
import { TextInput } from '../TextInput';
import { TodoCard } from '../TodoCard';

interface ITodoLists {
  id: string;
  slug: string;
  title: string;
  description: string;
  createdAt: string;
}

const getTodoLists = () => {
  const storedLists =
    typeof window !== 'undefined' ? localStorage.getItem(`todoLists`) : null;

  if (storedLists) {
    return JSON.parse(storedLists);
  } else {
    return [];
  }
};

export default function Index() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [todoLists, setTodoLists] = useState<ITodoLists[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const createTodoList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodoList = {
      id: Date.now().toString(),
      slug:
        title.toLowerCase().replaceAll(/[ /]/gi, '-') || Date.now().toString(),
      title: title || '<UNTITLED>',
      description: description,
      createdAt: new Date().toISOString().slice(0, 10)
    };

    setTodoLists([...todoLists, newTodoList]);
    setIsModalOpen(false);
    setTitle('');
    setDescription('');
  };

  const deleteList = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newLists = [...todoLists];

    const clickedListSlug = (e.target as HTMLButtonElement)
      .parentElement!.children[1].getAttribute('href')!
      .replace('/', '');

    const clickedListIndex = newLists.findIndex(
      list => list.slug === clickedListSlug
    );

    newLists.splice(clickedListIndex, 1);
    localStorage.removeItem(`todo-${clickedListSlug}`);
    setTodoLists(newLists);
  };

  useEffect(() => {
    setTodoLists(getTodoLists());
  }, []);

  useEffect(() => {
    localStorage.setItem(`todoLists`, JSON.stringify(todoLists));
  }, [todoLists]);

  return (
    <>
      <main className='mb-[4.25rem] grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8'>
        <TodoCard
          to='/demo'
          title='Demo ToDo List'
          description='Demo todo list created using designs provided by Frontend Mentor.'
          date='2023-01-14'
          permanent
        />
        {todoLists.map(list => (
          <TodoCard
            key={list.id}
            to={`/${list.slug}`}
            title={list.title}
            description={list.description}
            date={list.createdAt}
            deleteList={deleteList}
          />
        ))}
        <NewTodoButton {...{ isModalOpen, setIsModalOpen }} />
      </main>
      {isModalOpen && (
        <div
          aria-expanded={isModalOpen}
          aria-label='New Todo list modal'
          className='fixed inset-0 flex h-full w-full overflow-y-auto bg-dark-shadow py-12'>
          <FocusTrap>
            <form
              onSubmit={createTodoList}
              className='relative my-auto mx-auto flex h-auto w-[87%] max-w-[30rem] flex-col items-start gap-3 rounded-component bg-light-element px-4 pt-3.5 pb-5 shadow-xl shadow-light-shadow dark:bg-dark-element md:gap-4 md:px-6'>
              <h3 className='text-modal-m md:text-modal-d'>New Todo List</h3>
              <TextInput {...{ title, setTitle }} />
              <AreaInput {...{ description, setDescription }} />
              <div className='flex w-full flex-col items-stretch gap-3 text-white md:flex-row md:items-center md:justify-between md:gap-4'>
                <button
                  type='submit'
                  className='rounded-component bg-primary px-7 py-3 text-controls'>
                  Create a new list
                </button>
                <button
                  type='button'
                  onClick={() => setIsModalOpen(false)}
                  className='border-box rounded-component bg-error px-7 py-3 text-controls'>
                  Cancel
                </button>
              </div>
            </form>
          </FocusTrap>
        </div>
      )}
    </>
  );
}
