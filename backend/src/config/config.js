import dotenv from "dotenv";
import pkg from "loglevel";

const { enableAll, warn, info, error, trace, debug } = pkg;

dotenv.config();

const ENV = process.env.NODE_ENV || "development";

enableAll();

const config = {
  production: {
    app: {
      PORT: process.env.PORT || 4000,
    },
    logger: {
      warn: warn,
      info: info,
      error: error,
      trace: trace,
      debug: debug,
    },
}
}

export default config;