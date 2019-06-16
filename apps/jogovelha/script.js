var game = [[0,0,0],[0,0,0],[0,0,0]];
var vez = "x";
var jogadas = 0;

var div = document.getElementById("jogo");

div.addEventListener("click", listener);

function listener(event){
	var id = event.target.id;
	if(id[0]!='c'){return;}
	var i1 = id[2];
	var i2 = id[4];

	game[i1][i2] = vez;
	colocarImg(event.target,"imgs/"+vez+".jpg",200,200)
	var r = win(vez);
	jogadas ++;
	if (r=="x") {
		alert("X ganhou");
	}else if(r == "o"){
		alert("O ganhou");
	}else if(jogadas > 8){
		alert("Velha");
	}

	if(vez == "x"){
		vez = "o";
	}else{
		vez = "x";
	}
}


function win(player) {
	if(game[0][0] == game[0][1] && game[0][0] == game[0][2] && game[0][0]==player ){
		return game[0][0];
	}else if(game[1][0] == game[1][1] && game[1][0] == game[1][2] && game[1][0]==player ){
		return game[1][0];
	}else if(game[2][0] == game[2][1] && game[2][0] == game[2][2] && game[2][0]==player ){
		return game[2][0];
	}else if(game[0][0] == game[1][0] && game[0][0] == game[2][0] && game[0][0]==player ){
		return game[0][0];
	}else if(game[1][0] == game[1][1] && game[1][0] == game[1][2] && game[1][0]==player ){
		return game[1][0];
	}else if(game[2][0] == game[2][1] && game[2][0] == game[2][2] && game[2][0]==player ){
		return game[2][0];
	}else if(game[0][2] == game[1][1] && game[0][2] == game[2][0] && game[0][2]==player ){
		return game[0][2];
	}else if(game[0][0] == game[1][1] && game[0][0] == game[2][2] && game[0][0]==player ){
		return game[0][0];
	}else{
		return 0;
	}
}

function colocarImg(father,src,h,w){
	var oImg = document.createElement("img");
	oImg.setAttribute('src', src);
	oImg.setAttribute('alt', 'na');
	oImg.setAttribute('height', h);
	oImg.setAttribute('width', w);
	father.appendChild(oImg);
}