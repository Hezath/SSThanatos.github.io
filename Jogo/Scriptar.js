var playerEscolha = 0;
var botEscolha= 0;
var p = document.getElementById("player-life");
var b = document.getElementById("bot-life");
var vidap = 3;
var vidab = 3;
var cont;
var borracha;
//1-Escudo
//2-Espada
//3-Arco
p = document.getElementById("player-life");
p.innerHTML= vidap;
b = document.getElementById("bot-life");
b.innerHTML= vidab;



function jogar(escolha){
	playerEscolha = escolha;
	botEscolha = Math.floor(Math.random() * (3 - 1 + 1)) +1;	
	if((playerEscolha == 1) && (botEscolha == 2)){
		vidap --;
		borracha = document.getElementById("player-life");
		borracha.innerHTML='';
		p = document.getElementById("player-life");
		p.innerHTML= vidap;

	}
	else if((playerEscolha == 1) && (botEscolha == 3)){
		vidab --;
		borracha = document.getElementById("bot-life");
		borracha.innerHTML='';
		b = document.getElementById("bot-life");
		b.innerHTML= vidab;
	}
	else if((playerEscolha == 2) && (botEscolha == 3)){
		vidap --;
		borracha = document.getElementById("player-life");
		borracha.innerHTML='';
		p = document.getElementById("player-life");
		p.innerHTML= vidap;
	}
	else if((playerEscolha == 2) && (botEscolha == 1)){
		vidab --;
		borracha = document.getElementById("bot-life");
		borracha.innerHTML='';
		b = document.getElementById("bot-life");
		b.innerHTML= vidab;
	}
	else if((playerEscolha == 3) && (botEscolha == 2)){
		vidap --;
		borracha = document.getElementById("player-life");
		borracha.innerHTML='';
		p = document.getElementById("player-life");
		p.innerHTML= vidap;
	}
	else if((playerEscolha == 3) && (botEscolha == 1)){
		vidab --;
		borracha = document.getElementById("bot-life");
		borracha.innerHTML='';
		b = document.getElementById("bot-life");
		b.innerHTML= vidab;
	}
	else if ((playerEscolha == botEscolha)){
		alert("Empate!");
	}
	if(vidap == 0){
		vidab = 3;
		vidap = 3;
		alert("Billy, O Alvo Ganhou");

		p = document.getElementById("player-life");
		p.innerHTML= vidap;
		b = document.getElementById("bot-life");
		b.innerHTML= vidab;
	}
	else if (vidab == 0){
		vidab = 3;
		vidap =3;
		alert("O Novato Ganhou");

		p = document.getElementById("player-life");
		p.innerHTML= vidap;
		b = document.getElementById("bot-life");
		b.innerHTML= vidab;
	}
}



