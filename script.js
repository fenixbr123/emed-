function media(){
var junin =parseFloat( document.getElementById('valor1').value);
var batatinha123 =parseFloat( document.getElementById('valor2').value);
var ondeeuclico = parseFloat(document.getElementById('valor3').value);
var resultado = ( junin + batatinha123 + ondeeuclico ) / 3;
document.getElementById('result').innerText=resultado;
}


