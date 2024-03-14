// getting connected to express middleware
const express = require('express');

// getting connected to config file for database connection
require('./db/Config');

const app = express();
app.use(express.json());


const user = require('./db/User');

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
});


// basic get api
app.get("/user", async (req, res) => {
    let result = await user.find();
    let filteredArray = result.find(a => {
        return a.Name == "James Bond"
    })

    res.send(filteredArray);
    console.log(filteredArray);
})

// basic get api for single user
app.get("/user/:Name", async (req, res) => {
    // findOne for single first single result with params
    let singleResult = await user.findOne({
        Name: req.params.Name
    });

    // find method for all results with params
    let allResult = await user.find({
        Name: req.params.Name
    });
    res.send(singleResult);
})

// basic post api for adding user
app.post("/addUser", async (req, res) => {
    let userData = new user(req.body);
    let result = await userData.save();
    res.send(result)
})

// basic update api
app.post("/updateUser/:email", async (req, res) => {
        console.log("Email params", req.params.email);
        let result = await user.updateOne(
            { Email: req.params.email },
            { $set: req.body }
        )
        result ? res.send(result) : res.send({ result: "Something went wrong" })
})

// basic delete api
app.delete("/deleteUser/:id", async (req, res) => {
    let result = await user.deleteOne(
        { id: req.params.id }
    )
    result ? res.send(result) : res.send({ result: "Something went wrong" })
})
