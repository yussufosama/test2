import { Router } from "express";
import { signup, signin } from "./auth.service.js";

const router = Router();

router.post("/signup", async (req, res, ) => {
       let data = await signup(req.body);
    
    res.json(data);   
});

router.post("/signin", async (req, res, ext) => {
    
        let data = await signin(req.body);
            
        res.json(data);
})


export default router;
