var app = angular.module('News',[])
app.controller('news_app_controller', function($scope,$http){
    $scope.mynews = "Hello News"
var newsArray = []
//$scope.getNews = function(){

    // alert('hi')

    $http({
        method : 'GET',
        url : '/newsEverything',
        // data : {},
    }).then(function(response){
        var newsArray = response.data.articles
        $scope.newss = newsArray;
        console.log(newsArray)

        
    }).catch(function(err){
        console.log(err)
    })
    
//}

})