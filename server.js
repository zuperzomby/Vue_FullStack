const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

//het index.html
const HTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8");
})();


//return all static modules from the dist folder
app.use("/dist", express.static(path.resolve(__dirname, "./dist")));

require("./build/dev-server")(app);

//push the index html to browser
app.get('*', (req,res) =>{
  res.write(HTML);
  res.end();
});

//define port
const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log('server started');
});
