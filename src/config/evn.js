import env from "dotenv";

import envvar from "env-var";

env.config();

const { get } = envvar;
export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  PUBLIC_PATH: get("PUBLIC_PATH").default("public").asString(),
};
