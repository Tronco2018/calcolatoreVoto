function calculate(){
	var totalizzato = parseInt(document.getElementById("totalizzato").value, 10);
	var votoMax = parseInt(document.getElementById("votoMassimo").value, 10);
	var votoMin = parseInt(document.getElementById("votoMinimo").value, 10);
	var punteggioMax = parseInt(document.getElementById("punteggiomax").value, 10);
	let result = (totalizzato/punteggioMax) * (votoMax-votoMin) + votoMin;

	document.getElementById("resultLabel").innerText = result;
	
}
