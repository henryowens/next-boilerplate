import { Head, Html, Main, NextScript } from "next/document";

import appConfig from "@/utils/appConfig";

const MyDocument: React.FC = () => (
  <Html lang={appConfig.title}>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);
export default MyDocument;
