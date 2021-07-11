import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Layout } from "components/layout";
import type { NextPage } from "next";

export const ProtectedPage: NextPage = () => {
  const { user, error, isLoading } = useUser();

  return (
    <Layout>
      <h1>Protected Page</h1>

      {isLoading && <p>Loading profile...</p>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}

      {user && (
        <>
          <h4>Profile</h4>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired();
