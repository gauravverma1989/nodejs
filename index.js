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
app.get("/user", async(req, res) => {
    let result = await user.find();
    let filteredArray = result.find(a => {
        return a.Name == "James Bond"
    })

    res.send(filteredArray);
    console.log(filteredArray);
})