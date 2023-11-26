import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
let users = [];
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

router.get('/:id', (req, res) => {
    const { id }= req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
})
router.delete('/:id', (req,res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id) // returns false hence deleted
    res.send(`User Id ${id} deleted from database`)
})

router.patch('/:id', (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id)
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with id ${id} has been updated`);
})
export default router;