//var array=("qwerty asd zxcv hfhfhf kaksfd");
var array=("aba aa ad vcd aba");
//var array=("enyky benyky yeli varenniky")
//var salida = [];
var contador=0;
var comp=0;
var d=0;
var a="";
//var arraydecadenas= array.split(" ");

//if (true) {
var espacio= ' ';
array=array+ espacio.charAt(0);
for (var i = 0; i < array.length; i++) {
  contador++;
  if (array[i] === ' ') {
    if (contador > comp) {
        comp = contador;
    }
    contador=0;
  }
}
contador=0;
for (var j = 0; j < array.length+comp; j++) {
  contador++;
  if (array[j] === ' ') {
    if (contador== comp) {

    for (var k = 1; k < comp; k++) {
      d=j-comp+k;
      //console.log(array[d]);
      a=a+array.charAt(d);
    }
    console.log(a);
    a="";
  }
  contador=0;
  }
}
//}
