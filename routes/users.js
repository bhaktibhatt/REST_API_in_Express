import express from "express";
const router = express.Router();
const users = [
    {
        firstName:"John",
        lastName: "Doe",
        age: 25
    }
]
//all routers start from '/user' hence only / is required
router.get('/', (req, res)=>{
    console.log(users);
    res.send(users);
});

router.post('/', (req, res) =>{
     console.log("POST Route REACHED");
     res.send("POST Route REACHED")
} );

export default router;