;(function(){
	module.exports=function(_g){

		var app = _g.app;
		var http = _g.http;

		function route(){
			app.get('/',function(req,res){
				res.render('index.html',{});
			});

			//1. enetry point
			app.listen(1005,function(){
			  console.log('KoreaFlower.shop Server listen on *:1005');
			});
		}

		return {
			route:route
		};
	}

})();



