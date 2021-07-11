import fetch from "isomorphic-unfetch";
import type { ReactElement, VFC } from "react";
import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

export type UserProfile = {
  email: string | null | undefined;
  emailVerified: boolean | null | undefined;
  name: string | null | undefined;
  nickname: string | null | undefined;
  picture: string | null | undefined;
  sub: string | null | undefined;
  updatedAt: string | null | undefined;
  /** Any custom claim which could be in the profile */
  [key: string]: unknown;
};

type UserContext = {
  user: UserProfile | null;
  isLoading: boolean;
};

// Use a global to save the user, so we don't have to fetch it again after page navigations
let userState: UserProfile;

const User = createContext<UserContext>({ user: null, isLoading: false });

export const fetchUser = async (): Promise<UserProfile> => {
  if (userState !== undefined) {
    return userState;
  }

  const res = await fetch("/api/me");
  userState = res.ok ? await res.json() : null;
  return userState;
};

type UserProviderProps = { value: UserContext; children: React.ReactNode };

export const UserProvider: VFC<UserProviderProps> = (
  props
): ReactElement<UserContext> => {
  const { user } = props.value;

  // If the user was fetched in SSR add it to userState so we don't fetch it again
  useEffect(() => {
    if (!userState && user) {
      userState = user;
    }
  }, []);

  return <User.Provider value={props.value}>{props.children}</User.Provider>;
};

export const useUser = (): UserContext => useContext(User);

export const useFetchUser = (): UserContext => {
  const [data, setUser] = useState({
    user: userState || null,
    isLoading: userState === undefined,
  });

  useEffect(() => {
    if (userState !== undefined) {
      return;
    }

    let isMounted = true;

    fetchUser().then((user) => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        setUser({ user, isLoading: false });
      }
    });

    return () => {
      isMounted = false;
    };
  }, [userState]);

  return data;
};
