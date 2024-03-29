import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';
import "../components/bufferFill";
import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
import Footer from '../components/Footer';

import { Providers } from '../components/Providers';

// Use require instead of import since order matters
require('@solana/wallet-adapter-react-ui/styles.css');
require('../styles/globals.css');

const App: FC<AppProps> = ({ Component, pageProps }) => {
  console.log("Hello");
  return (
    <Providers>
      <Header />
      <Component {...pageProps} />
      <Toaster
          position="bottom-center"
          containerStyle={{
            margin: "auto",
            width: "420px",
          }}
        />
        <Footer />
        <Analytics />
    </Providers>
  );
};

export default App;
