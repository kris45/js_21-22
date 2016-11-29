var app = {
	pow: function (a, b){
		var res = 1;
		for (var i = 0; i < b; i++) {
			res *= a;
		}
		return(res);
	}
}

try {
	module.exports = app;
} catch (e) {}

