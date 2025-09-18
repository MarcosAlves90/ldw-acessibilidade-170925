// PRETO E BRANCO
document.getElementById('btn-blackwhite').addEventListener('click', function() {
    document.body.classList.toggle('black-and-white');
});

// ALTO CONTRASTE
document.getElementById('btn-high-contrast').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

// A+ e A-
window.onload = function()
{
    //Seleciona o elemento <body> para que possamos alterar seu estilo.
    var aumentarTexto = document.getElementById('btn-increase-font');
    var diminuirTexto = document.getElementById('btn-decrease-font');
    var textos = document.querySelectorAll('body *');

    // O padrão de tamanho equivale a 100% do valor definido no style
    var fontSize = 100;

    // Valor percentual de 10% que irá aumentar ou diminuir do padrão da fonte
    var qntAumentarDiminuir = 10;

    // Atualiza o tamanho da fonte de todos os elementos de texto
    function atualizarFontes() {
        textos.forEach(function(elemento) {
            elemento.style.fontSize = fontSize + '%';
        });
    }

    // Evento de click para aumentar a fonte
    aumentarTexto.addEventListener
    ('click', function(event)
        {
            fontSize = fontSize + qntAumentarDiminuir;
            atualizarFontes();
        }
    );

    // Evento de click para diminuir a fonte
    diminuirTexto.addEventListener
    ('click', function(event)
        {
            fontSize = fontSize - qntAumentarDiminuir;
            atualizarFontes();
        }
    );
}