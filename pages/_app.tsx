import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {RecoilRoot} from "recoil";
import { ThemeWrapper } from "components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <RecoilRoot>
        <ThemeWrapper>
            <Component {...pageProps} />
        </ThemeWrapper>
      </RecoilRoot>
  );
};

export default MyApp;
