function szamol() {
    var sugar = parseFloat(document.getElementById("sugar").value);
    var magassag = parseFloat(document.getElementById("magassag").value);
    var mértékegység = document.getElementById("mértékegység").value;
    var pi = 3.14;
    var terfogat = sugar * sugar * pi * magassag;
    var felszin = 2 * sugar * sugar * pi + 2 * sugar * pi * magassag;
    document.getElementById('terfogat').value = terfogat.toLocaleString() + "köb" + mértékegység;
    document.getElementById('felszin').value = felszin.toLocaleString() + "négyzet" + mértékegység ;
}