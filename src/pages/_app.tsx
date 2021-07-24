import "../styles/globals.css";

import { UserProvider } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { Layout } from "src/components/Layout";

const MyApp: NextPage<AppProps> = (props) => {
  return (
    <UserProvider>
      <Layout>
        <props.Component {...props.pageProps} />
      </Layout>
    </UserProvider>
  );
};
export default MyApp;
