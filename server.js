const express=require("express");
const cors=require("cors");
const path=require("path");
const dotenv =require("dotenv");
const { fileURLToPath }=require("url");
const { dirname, join }=require("path");

require("dotenv").config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(cors());


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
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build", "index.html"));
});

app.listen(5000,()=> console.log("Server running on port 5000"));