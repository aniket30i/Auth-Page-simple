import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//P9VxZSA8uV1jliVo

//mongodb+srv://aniketsaha1809:P9VxZSA8uV1jliVo@authcluster.ul67c.mongodb.net/?retryWrites=true&w=majority&appName=authCluster
