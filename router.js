var express = require('express')
var app = express()
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('13b05e3269df4384920d35453c476d24');
app.use(express.static(__dirname))

app.get('/',function(req, res){
    res.sendfile('./home.html')
    //res.sendfile('./slider.html')
})
app.get('/newsEverything', function(req, res){
    newsapi.v2.everything({
        sources: 'bbc-news'
      }).then(response => {
        // console.log(response);
        res.send(response)
      }).catch(function(err){
          console.log(err)
      });
})


app.listen(8080,()=>{
    console.log("App running on http://localhost:8080/")
})