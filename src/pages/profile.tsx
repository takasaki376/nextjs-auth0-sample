import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";
import { Col, Row } from "reactstrap";
import { ErrorMessage } from "src/components/ErrorMessage";
import { Highlight } from "src/components/Highlight";
import { Loading } from "src/components/Loading";

const Profile = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <Row
            className="profile-header text-md-left items-center mb-5 text-center"
            data-testid="profile"
          >
            <Col md={2}>
              <Image
                src={user.picture as string}
                alt="Profile"
                className="img-fluid profile-picture mb-0 ml-0 rounded-full"
                width="50"
                height="50"
                // decode="async"
                data-testid="profile-picture"
              />
            </Col>
            <Col md>
              <h2 data-testid="profile-name">{user.name}</h2>
              <p className="lead text-muted" data-testid="profile-email">
                {user.email}
              </p>
            </Col>
          </Row>
          <Row data-testid="profile-json">
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
          </Row>
        </>
      )}
    </>
  );
};

const onRedirecting = () => {
  return <Loading />;
};

const onError = (props: Error) => {
  return <ErrorMessage>{props.message}</ErrorMessage>;
};

export default withPageAuthRequired(Profile, {
  onRedirecting,
  onError,
});
