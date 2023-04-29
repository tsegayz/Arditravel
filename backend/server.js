const express = require("express");

const app = express();

// routing 
app.get("/api", (req, res) => {
    res
    .status(200)
    .json( { "users": [ "hana", "mike", "elena" ]} )
})

// app.post ('/', (req, res) => {
//     res.send('you can post this end point')
// })

const port = 5000;
app.listen( port, () => {
    console.log(`Running on port ${port}....`);
})