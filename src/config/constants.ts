import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
  EMAIL: process.env.EMAIL,
  GITHUB_URL: process.env.GITHUB_URL,
  PORT: process.env.PORT || 4001,
};
