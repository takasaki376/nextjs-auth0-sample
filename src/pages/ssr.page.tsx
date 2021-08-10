import type { UserProfile } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import { Highlight } from "src/components/Highlight";

type Props = {
  user: UserProfile;
};

const SSRPage: NextPage<Props> = (props) => {
  return (
    <>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">Server-side Rendered Page</h1>
        <div data-testid="ssr-text">
          <p>
            You can protect a server-side rendered page by wrapping the{" "}
            <code>getServerSideProps</code> function with{" "}
            <code>withPageAuthRequired</code>. Only logged in users will be able
            to access it. If the user is logged out, they will be redirected to
            the login page instead.{" "}
          </p>
          <p>
            Protected server-side rendered pages automatically receive a{" "}
            <code>user</code> prop containing the user profile.
          </p>
        </div>
      </div>
      <div className="opacity-100" data-testid="ssr-json">
        <div className="opacity-100">
          <h6>User prop</h6>
          <Highlight>{JSON.stringify(props.user, null, 2)}</Highlight>
        </div>
      </div>
    </>
  );
};
export default SSRPage;
export const getServerSideProps = withPageAuthRequired();
