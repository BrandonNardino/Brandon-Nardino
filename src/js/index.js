/*
objetivo - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente
- passo 1 - dar um jeito de pegar o elemento HTML dos botoes
- passo 2 - dar um jeito de identificar o clique do usuario no botao
- passo 3 - desmarcar o botao clicado anterior 
- passo 4 - marcar o botao clicado como se estivesse selecionado
- passo 5 - esconder a imagem anteriormente selecionada
- passo 6 - fazer aparecer a imagem correspondente ao botao clicado
- passo 7 - esconder a informaçao correspondente anteriormente selecionada
- passo 8 - mostrar a informaçao da imagem referente ao botao clicado
*/

//- passo 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

//- passo 2 - dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log("clicou");

        //- passo 3 - desmarcar o botao clicado anterior 
        const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado");

        //- passo 4 - marcar o botao clicado como se estivesse selecionado
        botao.classList.add("selecionado");

        //- passo 5 - esconder a imagem anteriormente selecionada
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        //- passo 6 - fazer aparecer a imagem correspondente ao botao clicado
        imagens[indice].classList.add("ativa");

        //- passo 7 - esconder a informaçao correspondente anteriormente selecionada
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");

        //- passo 8 - mostrar a informaçao da imagem referente ao botao clicado
        informacoes[indice].classList.add("ativa");

    });
});
