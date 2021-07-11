// import type OidcClientSettings from "./oidc-client-settings";

// import type { ICookieSessionStoreSettings } from "./session/cookie-store/settings";

export type OidcClientSettings = {
  httpTimeout?: number; // Timeout (in milliseconds) for HTTP requests to Auth0.
  clockTolerance?: number; // Allowed leeway for id_tokens (in milliseconds).
};

export type ICookieSessionStoreSettings = {
  cookieSecret: string; // Secret used to encrypt the cookie.
  cookieName?: string; // Name of the cookie in which the session will be stored.
  // Defaults to "Lax"
  cookieSameSite?: boolean | "lax" | "strict" | "none" | undefined; // SameSite support for the session cookie which helps mitigate CSRF attacks.
  // Defaults to 8 hours.
  cookieLifetime?: number; // Cookie lifetime in seconds. After this time has passed, the user will be redirect to Auth0 again.

  /**
   * Path on which to set the cookie.
   * Defaults to /
   */
  cookiePath?: string;

  /**
   * The Domain option to set on the cookie.
   * Defaults to omitting the option, which restricts the cookie
   * to the host of the current document URL, not including subdomains.
   */
  cookieDomain?: string;

  /**
   * Save the id_token in the cookie.
   * Defaults to 'false'
   */
  storeIdToken?: boolean;

  /**
   * Save the access_token in the cookie.
   * Defaults to 'false'
   */
  storeAccessToken?: boolean;

  /**
   * Save the refresh_token in the cookie.
   * Defaults to 'false'
   */
  storeRefreshToken?: boolean;
};

export type IAuth0Settings = {
  domain: string; // Auth0 domain.
  clientId: string; // Auth0 client ID.
  clientSecret?: string; // Auth0 client secret.
  redirectUri: string; // Url to redirect to after the user has signed in.
  postLogoutRedirectUri: string; // URL to redirect to after the user has signed out.
  scope: string; // The scope requested by the client.
  audience?: string; // API Audience.
  session?: ICookieSessionStoreSettings; // Settings related to the session.
  oidcClient?: OidcClientSettings; // Settings for the OIDC Client which performs the code exchange.
};
