const express = require('express')
const app = express() 
app.get("/singup", (req, res) => {
    res.send("Hello");
});app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
})





