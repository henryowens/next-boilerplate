import type { AppProps } from "next/app";
import Head from "next/head";

import appConfig from "@/utils/appConfig";
import "../styles/globals.css";
import Link from "next/link";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{appConfig.title}</title>
      <meta name="description" content={appConfig.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Next.js Boilerplate</h3>
        <div className="flex gap-2">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  </>
);

export default App;
