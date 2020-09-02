import snoowrap from "snoowrap";
import { config } from "../config";
import { getCookie } from "./cookiemanager";

export const snooOptions: snoowrap.SnoowrapOptions = {
  userAgent: "toolbox-usernotes-lookup by /u/rylekatti",
  clientId: config.reddit.appId,
  clientSecret: "",
};

export const getRedditAuthUrl = () =>
  snoowrap.getAuthUrl({
    ...snooOptions,
    clientId: config.reddit.appId,
    scope: ["wikiread"],
    redirectUri: config.reddit.redirectUrl,
    permanent: false,
  });

export const getRedditClient = () =>
  new snoowrap({
    ...snooOptions,
    accessToken: getCookie("token"),
  });
