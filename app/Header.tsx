import Image from 'next/image';

export const Header = ({
  darkMode,
  setDarkMode
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className='relative mt-10 mb-8 flex items-center justify-between'>
      <h1 className='text-title-m text-white md:text-title-d'>TODO</h1>
      <button
        className='ml-4'
        type='button'
        aria-label='toggle theme'
        onClick={() => setDarkMode(!darkMode)}>
        <Image
          src={darkMode ? './icon-sun.svg' : './icon-moon.svg'}
          alt=''
          width={26}
          height={26}
          priority
        />
      </button>
    </header>
  );
};
