import Link from 'next/link';

interface ITodoCard {
  permanent?: boolean;
  to: string;
  title: string;
  description: string;
  date: string;
  deleteList?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TodoCard = ({
  permanent,
  to,
  title,
  description,
  date,
  deleteList
}: ITodoCard) => {
  return (
    <div className='group relative'>
      {!permanent && deleteList && (
        <button
          className='absolute top-3.5 right-4 hidden text-light-inactive hover:text-light-hover group-hover:inline-block dark:text-dark-inactive dark:hover:text-dark-hover'
          type='button'
          onClick={e => deleteList(e)}>
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
      )}
      <Link
        href={to}
        className='flex-start group flex min-h-[10.5rem] flex-col rounded-component bg-light-element py-3.5 px-4 shadow-lg shadow-light-shadow dark:bg-dark-element dark:shadow-dark-shadow md:px-6'>
        <h2 className='mb-3 text-card-title text-light-hover group-hover:text-primary dark:text-dark-hover dark:group-hover:text-primary'>
          {title}
        </h2>
        <p className='text-info text-light-text group-hover:text-light-hover dark:text-dark-text dark:group-hover:text-dark-hover'>
          {description}
        </p>
        <span className='mt-auto text-info text-light-inactive group-hover:text-light-hover dark:text-dark-inactive dark:group-hover:text-dark-hover'>
          {date}
        </span>
      </Link>
    </div>
  );
};
