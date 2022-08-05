import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {RecoilRoot} from "recoil";
import { ThemeWrapper, CustomToaster } from "components";
import 'react-loading-skeleton/dist/skeleton.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <RecoilRoot>
        <ThemeWrapper>
            <Component {...pageProps} />
            <CustomToaster />
        </ThemeWrapper>
      </RecoilRoot>
  );
};

export default MyApp;
