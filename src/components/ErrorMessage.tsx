import type { ReactNode, VFC } from "react";
import { Alert } from "reactstrap";

type Props = {
  children: ReactNode;
};

export const ErrorMessage: VFC<Props> = (props) => (
  <Alert color="danger" fade={false} data-testid="error">
    {props.children}
  </Alert>
);
