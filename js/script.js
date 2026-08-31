// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', function() {
    console.log("Projeto Museu Memória Afro carregado com sucesso!");

    // Exemplo de alerta suave ao clicar nos botões do acervo
    const botoesAcervo = document.querySelectorAll('.card-footer a');
    
    botoesAcervo.forEach(function(botao) {
        botao.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Esta coleção está em processo de digitalização para a preservação do acervo.");
        });
    });
});
