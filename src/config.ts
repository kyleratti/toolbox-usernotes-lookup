import configurator from "@kyleratti/configurator";

type AppConfig = {
  app: {
    url: string;
    urlPath: string;
  };
  reddit: {
    appId: string;
    redirectUrl: string;
  };
};

export const config = configurator<AppConfig>({
  app: {
    url: {
      env: "APP_URL",
      required: true,
    },
    urlPath: {
      env: "APP_URL_PATH",
      required: true,
    },
  },
  reddit: {
    appId: {
      env: "REDDIT_APP_ID",
      required: true,
    },
    redirectUrl: {
      env: "REDDIT_REDIRECT_URL",
      required: true,
    },
  },
});
