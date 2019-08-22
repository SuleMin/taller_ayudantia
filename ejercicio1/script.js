
function pares(){
    var u;
    var m = "",s="";
    m = document.getElementById("u").value;
    for (var i = 0; i < m.length; i++) {
      if ((m[i] & 1) == 0)
          s+=m[i];
    }
    document.getElementById("f").value=s;
}
