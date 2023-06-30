import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import './globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <AnimatePresence initial={false} mode="popLayout">
      <Component  {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
