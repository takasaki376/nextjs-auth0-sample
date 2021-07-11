import Head from "next/head";
import type { ReactNode, VFC } from "react";

import { Header } from "./header";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = (props) => {
  return (
    <>
      <Head>
        <title>Next.js with Auth0</title>
      </Head>

      <Header />

      <main>
        <div className="container">{props.children}</div>
      </main>

      <style jsx>{`
        .container {
          max-width: 42rem;
          margin: 1.5rem auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          color: #333;
          font-family: -apple-system, "Segoe UI";
        }
      `}</style>
    </>
  );
};
