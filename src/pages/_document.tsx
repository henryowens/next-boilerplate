import { Head, Html, Main, NextScript } from "next/document";

import appConfig from "@/utils/appConfig";

const MyDocument: React.FC = () => (
  <Html lang={appConfig.lang}>
    <Head />
    <body className="p-4">
      <Main />
      <NextScript />
    </body>
  </Html>
);
export default MyDocument;
