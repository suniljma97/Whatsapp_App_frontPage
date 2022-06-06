var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  next();
});
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const port=process.env.PORT_NUMBER;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
let baseURL="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
let axios=require("axios");
app.get("/data/:city",function(req,res){
    let city = req.params.city;
    let params={
            key:process.env.API_KEY,
            unitGroup:process.env.UNIT_GROUP,
            contentType:process.env.CONTENT_TYPE,
            include:process.env.INCLUDE
          };
    axios.get(baseURL+`/${city}`,{params:params})
    .then(function(response){   
        res.send(response.data);
    })
    .catch(function(error){
        if(error.response)
        {
            let {status,statusText}=error.response;
            res.status(status).send(statusText);
        }
        else res.status(400).send(error);
    })
})
