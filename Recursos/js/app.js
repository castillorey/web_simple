var d = document;
d.querySelector("#enviar").onclick = validarDatos;
d.getElementById("error").style.color = "red";
var reglaNombre = /[a-z]/;
function validarDatos(){
	var el = d.getElementById("nombres");
	if(!validarRequeridos(el)) return;
	if(!validarExpRegular(el,reglaNombre)) return;

	el = d.getElementById("apellidos");
	if(!validarRequeridos(el)) return;

	el = d.getElementById("email");
	if(!validarRequeridos(el)) return;

	d.getElementById("error").style.color = "green";
	d.getElementById("error").style.fontWeight = 'bold';
	d.getElementById("error").innerHTML = "<p>Todo bien. Enviando...</p>";

}

function validarRequeridos(el){
	sw = true;
	if(!el.checkValidity() && el.required){
		if(el.id == "email"){
			d.getElementById("error").innerHTML = "<p>Debe ingresar un "+ el.id +" valido.</p>";
		}else{
			d.getElementById("error").innerHTML = "<p>Debe ingresar "+ el.id +"</p>";
		}
		sw = false;	
	}
	
	else{
		d.getElementById("error").innerHTML = "";
	}
	return sw;
}

function validarExpRegular(el, regla){
	var valor = el.value;

	sw = true;

	if(!regla.test(valor)){
	d.getElementById("error").innerHTML = "<p>Debe ingresar "+ el.id +" valido(s).</p>";
	sw = false;
	}
	return sw;
}