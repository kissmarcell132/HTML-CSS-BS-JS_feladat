function szamol() {
    var a_oldal = parseFloat(document.getElementById("a_oldal").value);
    var b_oldal = parseFloat(document.getElementById("b_oldal").value);
    var mértékegység = document.getElementById("mértékegység").value;
    var kerulet = 2 * (a_oldal + b_oldal);
    var terulet = a_oldal * b_oldal;
    document.getElementById('kerulet').value = kerulet.toLocaleString() + mértékegység;
    document.getElementById('terulet').value = terulet.toLocaleString() + "négyzet" + mértékegység ;
}
