const express=require("express");

const app =express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });

app.listen(3000,function(){
    console.log("Server Started on port 3000");
});