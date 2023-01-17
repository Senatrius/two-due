import ThemeContextWrapper from '../../../components/ThemeWrapper';
import '../../../styles/globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className='min-h-full'
      lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta
          http-equiv='X-UA-Compatible'
          content='IE=edge'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <title>TwoDue | List</title>
      </head>
      <body className='mx-auto min-h-full w-[87%] bg-light-bg bg-light-m bg-contain bg-no-repeat text-light-text outline-primary dark:bg-dark-bg dark:bg-dark-m dark:text-dark-text md:w-[72%] md:bg-light-d dark:md:bg-dark-d lg:w-[55%] xl:w-[37.5%]'>
        <ThemeContextWrapper>{children}</ThemeContextWrapper>
      </body>
    </html>
  );
}
