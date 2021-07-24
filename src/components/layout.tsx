import Head from "next/head";
import type { ReactNode, VFC } from "react";
import { Container } from "reactstrap";
import { Footer } from "src/components/Footer";
import { NavBar } from "src/components/NavBar";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: VFC<LayoutProps> = (props) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css"
        />
        <title>Next.js Sample App</title>
      </Head>
      <main id="app" className="h-[100px] flex flex-col" data-testid="layout">
        <NavBar />
        <Container className="flex-grow mt-5">{props.children}</Container>
        <Footer />
      </main>
    </>
  );
};
