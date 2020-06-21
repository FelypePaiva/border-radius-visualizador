var rangeButtons = document.querySelectorAll("input[type='range']");
var divPrincipal = document.getElementById("range");

var borderRadius = [0, 0, 0, 0, 0, 0, 0, 0];
var borderRadiusStyle = "";


function adicionarEstilo(){
    borderRadiusStyle = gerarBorderRadiusStyle();
    divPrincipal.style.borderRadius = borderRadiusStyle;
    mostrarValores(borderRadiusStyle);
    console.log(borderRadiusStyle); 
}

function gerarBorderRadiusStyle(){
    var estilo = "";
    for(var i = 0; i < borderRadius.length; i++){
        estilo += borderRadius[i] + "%";
        (i == 3 )?estilo += " / " : estilo += " ";
    }
    return estilo;
}
function atualizarDados(elemento){
    borderRadius[elemento.dataset.index] = elemento.value;
    adicionarEstilo();
}
function mostrarValores(valor){
    document.querySelector('#valores > p').textContent = 'border-radius : ' + valor + ';';
}