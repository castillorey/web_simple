var d = document;
d.querySelector("#calcular").onclick = simular;

function simular(){
	
	var tabla = d.createElement("table");
	tabla.setAttribute("border","solid");
	var prestamo = parseInt(d.getElementById("prestamo").value);
	var tasaMax = parseInt(d.getElementById("tasaMax").value);
	var tasa = parseInt(d.getElementById("tasa").value);
	tasa = tasa / 100;
	var maxPeriodo = parseInt(d.getElementById("maxPeriodo").value);
	var periodo = parseInt(d.getElementById("periodo").value);
	var anchoTabla = (maxPeriodo / 6);
	var altoTabla = ((tasaMax - 1)/ 0.1) + 1;

	var cuotaElegida = (prestamo * tasa) / (1 - Math.pow((1 + tasa), - periodo));

	var fila1 = d.createElement('tr');
	var titulo = d.createElement('th');
	titulo.appendChild(d.createTextNode("Periodo en Meses"));
	titulo.setAttribute("colspan", anchoTabla);
	fila1.appendChild(titulo);
	tabla.appendChild(fila1);

	for (var i = 0.9; i <= tasaMax + 0.1; i = i + 0.1) {
		var fila = d.createElement('tr');
		//i = i.toFixed(3);
		for (var j = -6; j <= maxPeriodo; j = j + 6) {
			var cuota = (prestamo * (i / 100)) / (1 - Math.pow((1 + i), - j))
			var col = d.createElement("td");

			if(i == 0.9){
				col.appendChild(d.createTextNode(j));
			} else if (i == 1.0 && j == -6) {

				col.rowSpan = "" + altoTabla;
				col.appendChild(d.createTextNode("Interes mensual"));
				col.setAttribute("class", "textoVertical");

			} else if(j == 0){
				col.appendChild(d.createTextNode(i.toFixed(2)));
			}else {

				col.appendChild(d.createTextNode("$ " + cuota.toLocaleString()));
			}
			
			
			if(cuota == cuotaElegida) col.setAttribute("class", "cuotaElegida");
			if(i == tasa) col.setAttribute("class", "tasaElegida");
			if(j == periodo) col.setAttribute("class", "periodoElegido");

			fila.appendChild(col);
			
		}

		tabla.appendChild(fila)
	}
	var simulador = d.getElementById("tabla");
	simulador.appendChild(tabla);
}