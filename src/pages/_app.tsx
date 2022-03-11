import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import List from 'src/components/List';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
