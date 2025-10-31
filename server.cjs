const express = require("express");
const cors=require("cors");
const path=require("path");



require("dotenv").config();



const app = express();
app.use(
  cors({
    origin: "https://newsweb-n34b.onrender.com", // your frontend domain
    methods: ["GET"],
    credentials: true,
  })
);
app.use(express.static(path.join(__dirname, "frontend/dist")));

app.use("/api/news", async(req,res)=>{
    try{
 const query = req.query.q || "latest";
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`);
    const data = await response.json();
    res.json(data);
    }catch(error){
        console.log(error);
        res.status(500).json({error:"Failed to fetch news"});
    }
   
})

app.use(express.static(path.join(__dirname, "frontend/build")));
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

app.listen(5000,()=> console.log("Server running on port 5000"));