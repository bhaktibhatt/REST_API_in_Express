import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
const users = [];
//all routers start from '/user' hence only / is required
router.get('/', (req, res)=>{
    console.log(users);
    res.send(users);
});

//all routes starting from here are from "/users" specifyed in index.js
router.post('/', (req, res) =>{
    const user = req.body

    //... => spread operator it spreads the array 
    users.push({ ...user, id: uuidv4() });

    res.send(`User with name ${user.firstName} added to the DataBase!`)
} );

export default router;