import type { AppProps } from "next/app";
import Head from "next/head";

import appConfig from "@/utils/appConfig";
import "../styles/globals.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{appConfig.title}</title>
      <meta name="description" content={appConfig.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default App;
