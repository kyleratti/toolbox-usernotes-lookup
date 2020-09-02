import configurator from "@kyleratti/configurator";

type AppConfig = {
  app: {
    url: string;
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
