

//var cadena = "(bar)";
//var cadena = "foo(bar)baz";
//var cadena = "foo(bar)baz(blim)";
//var cadena = "foo(bar(baz))blim";
var cadena = "(asd(qwe)fr(rty(ew)df)kas(nel(pol)te)re(ser)bri)";

var cadenafalsa="";
//var expresionregular = /\s*(\s*/;

var a = 0;
var cont =0;
var contador =0;
var y=0;
var c=0;

for(var u=0; u< cadena.length;u++){
    if(cadena[u] === '('){
        cont++;
    }

}
while(cont>y){
    if(y!==0){
        contador=0;
        for(var i=0; i<=cadena.length-1;i++){

            if(cadena[i] === '(' ){
                 contador++;

                 //console.log(cadenafalsa);
                 if(c==contador){
                    for(var p=i; p< cadena.length;p++){
                         if(cadena[p] !== '(') {
                            cadenafalsa= cadenafalsa + cadena.charAt(p);
                            //console.log(cadenafalsa);
                        }
                        else {
                            p++;
                        }
                    }
                    cadena=cadenafalsa;
                 }
            }
            //console.log(contador);
            cadenafalsa= cadenafalsa + cadena.charAt(i);
            //console.log(contador);
            //break;
        }

    }
    c=0;
//console.log(cadena);
for(var r=0; r< cadena.length;r++){
    if(cadena[r] === '('){
        c++;
        a=r;
    }

}
//console.log(c);
cadenafalsa="";

for(var j=a; j< cadena.length;j++){
    if(cadena[j] === ')'){
        //console.log(j);
        for(var k=0; k< cadena.length;k++){

            if(k==a){

                while(a<j){
                    cadenafalsa= cadenafalsa+ cadena.charAt(j-1);
                    k++;
                    j--;
                }

            }
            cadenafalsa= cadenafalsa + cadena.charAt(k);
           // console.log(cadenafalsa);
        }
        break;
    }
}

cadena=cadenafalsa;
cadenafalsa= "";

console.log(cadena);
y++;
}

for(var o=0; o< cadena.length;o++){
    if(cadena[o] !== '(' && cadena[o] !== ')') {
        cadenafalsa= cadenafalsa + cadena.charAt(o);
    }

}
console.log(cadenafalsa);
