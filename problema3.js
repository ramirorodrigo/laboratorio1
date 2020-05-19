//cadenas de entrada
//var cad ="abba";
//var cad ="oruro";
//var cad ="qwerewq";
var cad = "vasvgfsadgj";
//var cad ="";

var si="es palindromo";
var no="No es palindromo";

var aux="";

var pir= cad.length%2;
var mitad= cad.length/2;
var red= Math.trunc(mitad);
//console.log(red);
for(var j=cad.length;j>-1;j--){
    aux=aux+cad.charAt(j);
}
if(aux==cad){console.log(si);}
else{console.log(no);}
console.log(aux);
