var express = require('express')
var app = express()
const WetherAPI = require('newsapi');
const wetherapi = new WetherAPI('http://api.openweathermap.org/data/2.5/forecast?id=1273865&APPID=d3393e2aa24edf81d64570894fc8cb5e&units=metric&cnt=500');
app.use(express.static(__dirname))

app.get('/',function(req, res){
    res.sendfile('./we.html')
    //res.sendfile('./slider.html')
})
app.get('/newsEverything', function(req, res){
    newsapi.v2.everything({
        sources: 'bbc-wether'
      }).then(response => {
        // console.log(response);
        res.send(response)
      }).catch(function(err){
          console.log(err)
      });
})

app.listen(8080,()=>{
    console.log("App running on http://localhost:4040/")
})