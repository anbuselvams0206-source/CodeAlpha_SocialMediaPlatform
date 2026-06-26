const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// Post routes
const postRoutes = require("./routes/posts");

app.use("/posts", postRoutes);


app.get("/", (req,res)=>{
    res.send("Social Media API Running");
});


app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});
