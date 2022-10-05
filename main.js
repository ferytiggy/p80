var nombres=[];
function enviar(){
    var guardar=document.getElementById("1").value;
    nombres.push(guardar);
    document.getElementById("nombres").innerHTML=nombres.toString();
}
function ordenar(){
    nombres.sort();
    var array =nombres.join("<br>")
    document.getElementById("ordenados").innerHTML=array;
}
function mostrar(){
    var array =nombres.join("<br>")
    document.getElementById("p1").innerHTML=array;
    document.getElementById("ordenar").style.display="block";
}
function buscar(){
    var buscar=document.getElementById("2").value;
    var cero=0;
    for(var i=0; i<nombres.length; i++){
        if(buscar==nombres[i]){
            cero=cero+1;
            
        }
    }
    document.getElementById("p2").innerHTML="nombre encontrado "+cero+" veces"
}