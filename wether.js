var app = angular.module('News', []);
app.controller('myCtrl', function($scope, $location, $http) {
    alert("hello")
//$scope.getvalues=function(){
    $http({
        method : "GET",
        url : 'http://api.openweathermap.org/data/2.5/forecast?id=1273865&APPID=d3393e2aa24edf81d64570894fc8cb5e&units=metric&cnt=500'
		

    }).then(function mySuccess(response) {
	 var r1=JSON.stringify(response)

       // $scope.myWelcome = JSON.stringify(response.data);
		$scope.city = response.data['city']['name']
//alert(r1);
		/*var myJSON = JSON.stringify(City);*/
		$scope.temperature = response.data['list'][0] ['main'] ['temp'];
		var iconcode=response.data['list'][0] ['weather'] [0] ['icon'];
		        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
				
						$scope.wicon=iconurl;

		$scope.date = response.data['list'][0] ['main'] ['date'];
		var d = new Date();
		document.getElementById("demo").innerHTML = d;
		
		//$location.path("/weather")
    }, function myError(response) {
        $scope.myWelcome = response.statusText;
    });
	//}
});