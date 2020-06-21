# Visualizador de Border-Radius

Implementação da [ideia](https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md) proposta pelo [app-ideas](https://github.com/florinpop17/app-ideas) que consiste no desenvolvimento de um sistema simples no qual é possivel alterar os valores da propriedade `border-radius` de uma box e visualizar em tempo real como a box é afetada com essas alterações.

![Gif demostrando o sistema em funcionamento](border-radius-2020-06-21_12.19.52.gif)

# Funções

- [x] Usuario consegue ver uma caixa com um `border-radius` aplicado a ela.
- [x] Usuario consegue mudar os valores do border-radius da caixa e visualizar o resultado.
- [x] O usuario consegue copiar o resultado da propriedade css `border-radius`.

# Compatibilidade
O sistema utiliza os pseudo-elementos css `::-webkit-slider-thumb` e `::-webkit-slider-runnable-track` os quais utilizam o prefixo `-webkit`, sendo assim ele somente apresentará o resultado desejado em navegadores Safari e Chrome em suas versões mais atualizadas.

[Visualize em seu navegador](https://felypepaiva.github.io/border-radius-visualizador/)
