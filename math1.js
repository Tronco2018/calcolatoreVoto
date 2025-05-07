function calculate(){
	document.getElementById("errorLabel").innerText = "";
	var totalizzato = parseFloat(document.getElementById("totalizzato").value, 10);
	var votoMax = parseFloat(document.getElementById("votoMassimo").value, 10);
	var votoMin = parseFloat(document.getElementById("votoMinimo").value, 10);
	var punteggioMax = parseFloat(document.getElementById("punteggiomax").value, 10);
	let result = ((totalizzato/punteggioMax) * (votoMax-votoMin) + votoMin) * 10;
	let arrotondato = Math.round(result) / 10;
	if (totalizzato > punteggioMax){
		document.getElementById("errorLabel").innerText = "\nPunteggio totalizzato maggiore del possibile!";
	} else if (totalizzato < 0){
		document.getElementById("errorLabel").innerText = "\nIl punteggio totalizzato deve essere maggiore di zero";
	} else if (Number.isNaN(arrotondato)){
		document.getElementById("errorLabel").innerText = "\nUno o + campi sono vuoti, riprovate";	
	} else {
		document.getElementById("resultLabel").innerText = arrotondato;
	}
}
