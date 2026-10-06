import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(`./.env.${process.env.NODE_ENV || 'dev'}`) });

const port = process.env.PORT 
const databaseURI = process.env.DATABASE_URI
const salt = process.env.SALT_ROUNDS







export const env = {
  port,
  databaseURI,
    salt
};
