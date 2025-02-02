import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
  EMAIL: process.env.EMAIL || 'default@example.com',
  GITHUB_URL: process.env.GITHUB_URL || 'https://default.github.url',
  PORT: process.env.PORT ? Number(process.env.PORT) : 4001,
};
