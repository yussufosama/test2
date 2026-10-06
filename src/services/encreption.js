import { env } from "../config/env.service.js";
import bcrypt from "bcrypt"



export const generateHash = async ({plainText, salt= env.salt}) => {

    let hashedData = await bcrypt.hash(plainText, Number(salt));

    return hashedData;
}