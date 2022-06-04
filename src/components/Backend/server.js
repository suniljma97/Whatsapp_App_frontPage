var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
    res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  next();
});
const port=2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));
let baseURL="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
let axios=require("axios");
app.get("/data/:city",function(req,res){
    let city = req.params.city;
    let params={key:"6UKKSCL5RYHQU42V7EA97VBEN",unitGroup:"metric",contentType:"json",include:"current"};
    axios.get(baseURL+`/${city}`,{params:params})
    .then(function(response){   
        res.send(response.data);
    })
    .catch(function(error){
        if(error.response)
        {
            let {status}=error.response;
            res.status(status).send("ERR_BAD_REQUEST");
        }
        else res.status(400).send("Bad Request");
    })
})
