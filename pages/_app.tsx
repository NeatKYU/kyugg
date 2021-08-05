import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../store/index';
import { Top } from '../src/components/Top';
import { Footer } from '../src/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Top/>
        <Component {...pageProps} />
        <Footer/>
      </Provider>
    </>
  )
}

export default MyApp;

// export default MyApp;
