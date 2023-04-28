const express = require("express");

const app = express();

// routing 
app.get("/api", (req, res) => {
    res.json( { "users": [ "hana", "mike", "elena" ]} )
})


const port = 5000;
app.listen( port, () => {
    console.log(`Running on port ${port}....`);
})