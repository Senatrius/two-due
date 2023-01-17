import '../../styles/globals.css';
import ThemeContextWrapper from '../../components/ThemeWrapper';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className='min-h-full'
      lang='en'>
      <body className='mx-auto min-h-full w-[87%] bg-light-bg bg-light-m bg-contain bg-no-repeat text-light-text outline-primary dark:bg-dark-bg dark:bg-dark-m dark:text-dark-text md:bg-light-d dark:md:bg-dark-d'>
        <ThemeContextWrapper>{children}</ThemeContextWrapper>
      </body>
    </html>
  );
}
