
var randomness = ["hi", "what", "is", "going", "on"];

var replace = $("#hello");

//replace.text(randomness);

function random(x) {
	var temp = x.length;
	var temp2;
	var temp3;
	if (temp > 0) {
		temp2 = Math.floor(Math.random() * temp);
		temp--;
		temp3 = x[temp];
		x[temp] = x[temp2];
		x[temp2] = temp3;
	}
	console.log(x);
	return x;
};

$("button").on("click", function() {
	var temp = random(randomness);
	replace.text(temp);
});
