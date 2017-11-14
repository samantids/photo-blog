const express = require("express");
const path = require("path");

const app = express();

const testData = {
  	"message": "Hi from your server", 
  	"photos":[
  		{
  			"name": "flip",
  			"url": "https://c1.staticflickr.com/7/6120/6342914492_6e28c1f830_b.jpg",
  			"id": "flipID"
  		},
  		{
  			"name": "swing",
  			"url": "https://c2.staticflickr.com/8/7361/8718373185_7d48581d4e_b.jpg",
  			"id": "swingID"
  		}
  	]
};

//serve static files from react directory
app.use(express.static(path.resolve(__dirname, "../photo-blog-react/build")));

//test root route
app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "../photo-blog-react/build", "index.html"));
});

app.get("/test", (req, res) => {
  res.set("Content-Type", "application/json");
  res.send(testData);
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Node server listening on ${port}`);