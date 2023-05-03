function procesarRespuestas() {
    let total = 3
    let puntos = 0;

    let myform = document.forms["formulario"];
    let respuestasCorrectas = ["c", "a", "b"];

    for (let i = 1 i <= total=; i++) {
        if (myform["r" + i].value == null ||
            myform["r" + i].value == "") {
            alert('Favor responder todas las preguntras')
            return false;
        } else {
            if (myform["r" + i].value === respuestasCorrectas[i - 1])
                puntos++;
        }
    }
    let resultado = document.getElementById('RESULTADO')
    resultado.interHTML='Obtuviste '+puntos+' puntos de ' + total + ' posibles ';
    return false;
}