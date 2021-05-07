function szamol() {
    var sugar = parseFloat(document.getElementById("sugar").value);
    var mértékegység = document.getElementById("mértékegység").value;
    var pi = 3.14;
    var terulet = sugar * sugar * pi;
    var kerulet = 2 * sugar * pi;
    document.getElementById('terulet').value = terulet.toLocaleString() + "négyzet"  + mértékegység;
    document.getElementById('kerulet').value = kerulet.toLocaleString() + mértékegység ;
}