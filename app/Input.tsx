export const Input = () => {
  return (
    <form className='relative'>
      <label
        htmlFor='new'
        className='sr-only'>
        Create a new todo
      </label>
      <div className='absolute top-1/2 left-5 h-5 w-5 -translate-y-1/2 rounded-full border-[1px] border-light-complete dark:border-dark-inactive md:left-[1.35rem] md:h-6 md:w-6'></div>
      <input
        className='w-full rounded-component bg-light-element px-5 py-3.5 indent-8 text-todo-m outline-primary placeholder:text-light-complete dark:bg-dark-element  dark:placeholder:text-dark-inactive md:py-[1.125rem] md:px-[1.375rem] md:indent-12 md:text-todo-d'
        type='text'
        name='new'
        id='new'
        placeholder='Create a new todo...'
      />
    </form>
  );
};
