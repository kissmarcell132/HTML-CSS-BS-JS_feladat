function szamol() {
    var a_oldal = parseFloat(document.getElementById("a_oldal").value);
    var b_oldal = parseFloat(document.getElementById("b_oldal").value);
    var c_oldal = parseFloat(document.getElementById("c_oldal").value);
    var mértékegység = document.getElementById("mértékegység").value;
    var terfogat = a_oldal * b_oldal * c_oldal;
    var felszin = 2 * (a_oldal * b_oldal + c_oldal * b_oldal + c_oldal * a_oldal);
    document.getElementById('terfogat').value = terfogat.toLocaleString() + "köb" + mértékegység;
    document.getElementById('felszin').value = felszin.toLocaleString() + "négyzet" + mértékegység ;
}
