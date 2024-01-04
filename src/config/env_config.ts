type EnvConfig = {
  DB_URL: string;
  DB_NAME: string;
  JWT_SECRET: string;
  API_ENDPOINT: string;
};

export const ENV_CONFIG: EnvConfig = {
  DB_URL: String(process.env.DB_URL),
  DB_NAME: String(process.env.DB_NAME),
  JWT_SECRET: String(process.env.JWT_SECRET_KEY),
  API_ENDPOINT: String(process.env.NEXT_PUBLIC_API_ENDPOINT),
};
