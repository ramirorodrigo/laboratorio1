

//cadenas de entrada
//var cad ="abba";
//var cad ="oruro";
//var cad ="qwerewq";
//var cad = "vaavggj";
var cad ="nnnassa";
//var cad ="abcd";
//var cad ="nnna";
//var cad = "asff";

var aux="";
var a=0;
var c=0;
var cont=0;

var pir= cad.length%2;
var mitad= cad.length/2;
var red= Math.trunc(mitad);
//if(pir !== 0){
    //while(red>0){
        for(var i=a;i<cad.length;i++){
            aux= aux + cad.charAt(i);
            for(var j=0;j<cad.length;j++){
                if(aux[i] === cad[j]){c++;}
            }
            if(c<2){cont++;}
            if(pir !== 0){
                if(cont>1){break;}
            }
            else{
                if(cont>0){break;}
            }
            c=0;
            a++;
        }
        red--;
    //}
            if(pir !== 0){
                if(cont>1){console.log("NO");}
                else{console.log("VERDADERO");}
            }
            else{
                if(cont>0){console.log("NO");}
                else{console.log("VERDADERO");}
            }
//}
