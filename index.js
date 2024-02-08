let p = document.getElementById("grid");
let y = 10;
let x = 10;
let chr = '#';

for(let i = 0; i < y; ++i){
	for(let j = 0; j < x; ++j){
		p.innerHTML += "<span id=\"" + j + i + "\"" + " onclick=\"Span()\">" + chr + "</span>";
	}
	p.innerHTML += "<br>";
}

function Span(){
	console.log(Math.floor(Math.random()*256));
}
