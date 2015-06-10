
var randomness = ["hi", "what", "is", "going", "on"];

var replace = $("#hello");

function random(x) {
	var temp = Math.floor(Math.random() * x.length);
	return x[temp];
}

$("button").on("click", function() {
	var temp = random(randomness);
	replace.text(temp);
});
