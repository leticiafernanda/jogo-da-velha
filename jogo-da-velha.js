//Fonte de estudos pertencentes a Leticia Fernanda. GitHub: https://github.com/leticiafernanda 
const casas = document.getElementsByTagName('input');
const reiniciar = document.getElementById('reiniciar'); 
const label_jogador = document.getElementById('jogador');

var jogador = '_'; 
var vencedor = '_'; 
var finish;


for(var i=0;i<9;i++) {
	casas[i].addEventListener('click', (event) => {		
		if( (event.target.value=='_') && (vencedor=='_')) {
			event.target.value=jogador; 
			event.target.style.color='#110901';
			trocarJogador();
            vencedor = vitoria(); 
        }
	});
}
reiniciar.addEventListener('click', (event) => {
	for(var i=0;i<9;i++) {
		casas[i].value='_'; 
		casas[i].style.color='#F7FE2E';
		casas[i].style.backgroundColor='#F7FE2E'; 
	}
	vencedor = '_'; 
	sortearJogador(); 
});

var sortearJogador = function() {
	if(Math.floor(Math.random() * 2)==0) {
		jogador = "O";
		label_jogador.innerText="O"; 
        label_jogador.style.color='#ffffff'; 
    	}else{
		jogador = "X";
		label_jogador.innerText="X"; 
		label_jogador.style.color='#000000'; 
	}
}

sortearJogador();
var trocarJogador = function() {
	if(jogador=='X') {
		jogador='O';
		label_jogador.innerText='O';
		label_jogador.style.color='#ffffff';
		
	}else{
		jogador='X';
		label_jogador.innerText='X';
		label_jogador.style.color='#000000';
	}
}
var vitoria = function() {
	if((casas[0].value==casas[1].value) && (casas[1].value==casas[2].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#14b95f';
		casas[1].style.backgroundColor='#14b95f';
		casas[2].style.backgroundColor='#14b95f';

		return casas[0].value;

	}else if((casas[3].value==casas[4].value) && (casas[4].value==casas[5].value) && casas[3].value!='_' ) {
		casas[3].style.backgroundColor='#14b95f';
		casas[4].style.backgroundColor='#14b95f';
		casas[5].style.backgroundColor='#14b95f';

		return casas[3].value;

	}else if((casas[6].value==casas[7].value) && (casas[7].value==casas[8].value) && casas[6].value!='_' ) {
		casas[6].style.backgroundColor='#14b95f';
		casas[7].style.backgroundColor='#14b95f';
		casas[8].style.backgroundColor='#14b95f';

		return casas[6].value;

	}else if((casas[0].value==casas[3].value) && (casas[3].value==casas[6].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#14b95f';
		casas[3].style.backgroundColor='#14b95f';
		casas[6].style.backgroundColor='#14b95f';

		return casas[0].value;

	}else if((casas[1].value==casas[4].value) && (casas[4].value==casas[7].value) && casas[1].value!='_' ) {
		casas[1].style.backgroundColor='#14b95f';
		casas[4].style.backgroundColor='#14b95f';
		casas[7].style.backgroundColor='#14b95f';

		return casas[1].value;

	}else if((casas[2].value==casas[5].value) && (casas[5].value==casas[8].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#14b95f';
		casas[5].style.backgroundColor='#14b95f';
		casas[8].style.backgroundColor='#14b95f';

		return casas[2].value;
	}else if((casas[0].value==casas[4].value) && (casas[4].value==casas[8].value) && casas[0].value!='_' ) {
		casas[0].style.backgroundColor='#14b95f';
		casas[4].style.backgroundColor='#14b95f';
		casas[8].style.backgroundColor='#14b95f';

		return casas[0].value;

	}else if((casas[2].value==casas[4].value) && (casas[4].value==casas[6].value) && casas[2].value!='_' ) {
		casas[2].style.backgroundColor='#14b95f';
		casas[4].style.backgroundColor='#14b95f';
		casas[6].style.backgroundColor='#14b95f';

		return casas[2].value;
	}					
    return '_';
}