import { UserModel } from "../../database/usermodel.js";
import bcrypt from "bcrypt";
import { generateHash } from "../../services/encreption.js";

export const signup = async (body) => {
 let { userName, email, password } = body;

  let existedUser = await UserModel.findOne({ email });
    if (existedUser) {
        return{ error: "User already exists" };
    }   else {

        let hashedPassword = await generateHash({plainText: password});
        if(hashedPassword) {
            
            let user = await UserModel.create({
                name: userName,
                email: email,
                password: hashedPassword,
    
            }); return user;
        }


        let user = await UserModel.create({
            name: userName,
           email: email,
            password: password,
        }); return user;
    }
    
};

export const signin = async (body) => {
   

     let { email, password } = body;
    let userData = await UserModel.findOne({ email });
    if (!userData) {
        return { error: "User not found" };
    }
    let ismatched = await bcrypt.compareHash(password, userData.password);
    if(ismatched) {
        return userData;
    } else {
        return { error: "Invalid email or password" };
    } 
};
