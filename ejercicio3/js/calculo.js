function calcular(){
    var a,b,c;
    a=parseFloat(document.getElementById("a").value);
    b=(a*.2);
    document.getElementById("b").value=b;
    c=(a+b);
    document.getElementById("c").value=c;
}
function calcular2(){
    var x,y;
    x=parseFloat(document.getElementById("x").value);
    y=parseFloat(document.getElementById("y").value);
    z=x+y;
    document.getElementById("z").value=z;
}
