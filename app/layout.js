import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import ClientLayout from './components/ClientLayout';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Next.js Boilerplate',
//   description: 'A complete Next.js boilerplate with authentication, Redux, and modern tooling',
//   keywords: 'nextjs, react, tailwind, redux, authentication',
//   authors: [{ name: 'Your Name' }],
//   viewport: 'width=device-width, initial-scale=1',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" /> */}
        {/* <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
