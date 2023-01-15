'use client';

import '../../styles/globals.css';

export default function TodoLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto w-[87%] md:w-[72%] lg:w-[55%] xl:w-[37.5%]'>
      {children}
    </div>
  );
}
