import React, { useEffect } from "react";
import { Redirect, RouteChildrenProps } from "react-router-dom";
import snoowrap from "snoowrap";
import ConditionalRender from "../components/ConditionalRender";
import PageContainer from "../components/PageContainer";
import { config } from "../config";
import { isAuthed, useTokenSetter } from "../context/AuthContext";
import { snooOptions } from "../services/reddit";

const getQuery = () => document.location.search;

const LoginCallbackPage: React.FC<RouteChildrenProps> = (props) => {
  const query = new URLSearchParams(getQuery());
  const token = query.get("code");
  const setToken = useTokenSetter();

  useEffect(() => {
    const loadRedditAuth = async () => {
      const client = await snoowrap.fromAuthCode({
        ...snooOptions,
        userAgent: "toolbox-usernotes-lookup by /u/rylekatti",
        clientId: config.reddit.appId,
        clientSecret: "",
        redirectUri: config.reddit.redirectUrl,
        code: token || "",
        permanent: false,
      });

      if (setToken && token) setToken(client.accessToken);
    };

    loadRedditAuth();
  }, []);

  return (
    <ConditionalRender
      shouldRender={!isAuthed()}
      falseRender={<Redirect to="/" />}
    >
      <PageContainer>An error occurred trying to sign you in.</PageContainer>
    </ConditionalRender>
  );
};

export default LoginCallbackPage;
