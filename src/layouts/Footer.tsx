import type { VFC } from "react";

export const Footer: VFC = () => {
  return (
    //   TODO
    <footer className="p-3 text-center bg-white" data-testid="footer">
      <div className="logo" data-testid="footer-logo" />
      <p data-testid="footer-text">
        Sample project provided by <a href="https://auth0.com">Auth0</a>
      </p>
    </footer>
  );
};
