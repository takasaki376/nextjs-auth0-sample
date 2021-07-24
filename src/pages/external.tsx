import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import type { MouseEventHandler } from "react";
import { useState } from "react";
import { Button } from "reactstrap";

import { ErrorMessage } from "../components/ErrorMessage";
import { Highlight } from "../components/Highlight";
import { Loading } from "../components/Loading";

type StateType = {
  isLoading: boolean;
  response: string | undefined;
  error: Error | undefined;
};

const External: NextPage = () => {
  const [state, setState] = useState<StateType>({
    isLoading: false,
    response: undefined,
    error: undefined,
  });

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const callApi = async () => {
      setState((previous) => ({ ...previous, isLoading: true }));

      try {
        const response = await fetch("/api/shows");
        const data = await response.json();

        setState((previous) => ({
          ...previous,
          response: data,
          error: undefined,
        }));
      } catch (error) {
        setState((previous) => ({ ...previous, response: undefined, error }));
      } finally {
        setState((previous) => ({ ...previous, isLoading: false }));
      }
    };
    event.preventDefault();
    callApi();
  };

  const { isLoading, response, error } = state;

  return (
    <>
      <div className="mb-5" data-testid="external">
        <h1 data-testid="external-title">External API</h1>
        <div data-testid="external-text">
          <p className="lead">
            Ping an external API by clicking the button below
          </p>
          <p>
            This will call a local API on port 3001 that would have been started
            if you run <code>npm run dev</code>.
          </p>
          {/* eslint-disable react/no-unescaped-entities */}
          <p>
            An access token is sent as part of the request's
            <code>Authorization</code> header and the API will validate it using
            the API's audience value. The audience is the identifier of the API
            that you want to call (see
            <a href="https://auth0.com/docs/get-started/dashboard/tenant-settings#api-authorization-settings">
              API Authorization Settings
            </a>{" "}
            for more info).
          </p>
        </div>
        <Button
          color="primary"
          className="mt-5"
          onClick={handleOnClick}
          data-testid="external-action"
        >
          Ping API
        </Button>
      </div>
      <div className="result-block-container">
        {isLoading && <Loading />}
        {(error || response) && (
          <div className="result-block" data-testid="external-result">
            <h6 className="muted">Result</h6>
            {error && <ErrorMessage>{error?.message}</ErrorMessage>}
            {response && (
              <Highlight>{JSON.stringify(response, null, 2)}</Highlight>
            )}
          </div>
        )}
      </div>
    </>
  );
};

const onRedirecting = () => {
  return <Loading />;
};

const onError = (props: Error) => {
  return <ErrorMessage>{props.message}</ErrorMessage>;
};

export default withPageAuthRequired(External, {
  onRedirecting,
  onError,
});
