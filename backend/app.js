const express = require("express");

const app = express();

// routing 
app.get("/", (req, res) => {
    res.status(200).json({ name: "what can i get you", age: "22"})
})


const port = 3000;
app.listen( port, () => {
    console.log(`Running on port ${port}....`);
})