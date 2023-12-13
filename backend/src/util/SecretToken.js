import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
const { sign } = jwt;

export function createSecretToken(id) {
  return sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
}
