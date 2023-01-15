export const TodoDetails = ({
  items,
  deleteCompletedItems,
  children
}: {
  items: number;
  deleteCompletedItems: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}) => {
  return (
    <div className='dark:text-dark-complete flex w-full items-center px-5 py-3.5 text-todo-m text-light-inactive md:px-[1.375rem] md:text-info'>
      <span className='mr-auto'>{`${items} items left`}</span>
      {children}
      <button
        onClick={deleteCompletedItems}
        className='ml-auto hover:text-light-hover dark:hover:text-dark-hover'>
        Clear Completed
      </button>
    </div>
  );
};
