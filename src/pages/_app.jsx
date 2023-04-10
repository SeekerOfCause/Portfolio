import Aos from 'aos';
import { useEffect } from 'react';
import '../styles/index.scss';
import dynamic from 'next/dynamic'
import ContextProvider from '../Context/ContextProvider';
import cssStyle from '../styles/utils.module.css'



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
    

      
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp
