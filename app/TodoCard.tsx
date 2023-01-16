import Link from 'next/link';

interface ITodoCard {
  to: string;
  title: string;
  description: string;
  date: string;
}

export const TodoCard = ({ to, title, description, date }: ITodoCard) => {
  return (
    <Link
      href={to}
      className='flex-start group flex min-h-[10.5rem] flex-col rounded-component bg-light-element py-3.5 px-4 shadow-lg shadow-light-shadow dark:bg-dark-element dark:shadow-dark-shadow md:px-6'>
      <h2 className='mb-3 text-card-title text-light-text group-hover:text-light-hover dark:text-dark-text dark:group-hover:text-dark-hover'>
        {title}
      </h2>
      <p className='text-info text-light-text group-hover:text-light-hover dark:text-dark-text dark:group-hover:text-dark-hover'>
        {description}
      </p>
      <span className='mt-auto text-info text-light-inactive group-hover:text-light-hover dark:text-dark-inactive dark:group-hover:text-dark-hover'>
        {date}
      </span>
    </Link>
  );
};
