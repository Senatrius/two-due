import { SetStateAction } from 'react';

export const NewTodoButton = ({
  isModalOpen,
  setIsModalOpen
}: {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      <button
        aria-label='New todo list'
        aria-expanded={isModalOpen}
        onClick={() => setIsModalOpen(!isModalOpen)}
        className='flex min-h-[10.5rem] items-center justify-center rounded-component bg-light-element py-3.5 px-4 text-light-inactive shadow-lg shadow-light-shadow hover:text-primary dark:bg-dark-element dark:text-dark-inactive dark:shadow-dark-shadow dark:hover:text-primary md:px-6'>
        <svg
          width='73'
          height='73'
          viewBox='0 0 73 73'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M29.7734 72.0753V0.0582275H44.1022V72.0753H29.7734ZM0.955933 43.2045V28.8757H72.973V43.2045H0.955933Z'
            fill='currentColor'
          />
        </svg>
      </button>
    </>
  );
};
