# História do JavaScript 🚀

JavaScript nasceu em 1995, criado pelo Brendan Eich, para deixar a web MUITO mais interativa e divertida! 🎉 Antes, as páginas só mostravam textos e imagens estáticas, mas com o JavaScript você pode criar animações, jogos, efeitos e muito mais.

No começo, a linguagem teve nomes diferentes, tipo Mocha e LiveScript, até chegar no famoso **JavaScript** — que nada tem a ver com Java, apesar do nome parecido! 😉

Logo depois, veio o padrão **ECMAScript**, garantindo que todos os navegadores entendessem a linguagem do mesmo jeito, deixando tudo mais fácil para a gente programar.

Hoje, JavaScript é uma das linguagens mais populares do mundo 🌍, usada não só para sites, mas também para apps, jogos e até servidores.

Se você está começando na programação, JavaScript é uma escolha top, porque roda direto no navegador e te ajuda a criar coisas incríveis rapidinho! 💻✨

Bora codar? 💪

# Recursos Básicos do JavaScript ⚡️

JavaScript é a linguagem que coloca vida nas suas páginas web! Se você está começando, aqui estão os fundamentos para começar com o pé direito.

# 🖥️ Usando `console.log()` no JavaScript

Se você está começando a programar com JavaScript, vai ouvir muito falar do `console.log()`. Ele é seu **melhor amigo** nos testes! 😄

## 📣 O que é `console.log()`?

É um comando usado para exibir informações no **console do navegador** (ou no terminal). Serve pra você ver se seu código está funcionando como esperado.

### Exemplo básico:

```js
console.log('Olá, mundo! 🌍');
# 💡 Variáveis em JavaScript


Sabe aquele espaço onde você guarda algo pra usar depois? No JavaScript, isso se chama **variável**! 🧠✨

## 📦 O que é uma variável?

Variável é um nome que você dá para guardar informações temporariamente, como números, textos, listas, etc.

### Exemplo básico:

``js
let nome = 'Maria';
let idade = 22;
console.log(nome); // Maria
console.log(idade); // 22

## Documentação

[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

# Introdução ao DOM no JavaScript

O **DOM** (Document Object Model) é uma interface de programação para documentos HTML e XML. Ele representa a página de forma que os programas possam alterar a estrutura do documento, seu estilo e seu conteúdo de forma dinâmica.

No contexto do **JavaScript**, o DOM é essencial para criar páginas interativas, pois permite acessar e manipular elementos HTML através do código.

## O que o DOM permite fazer?

Com o DOM, você pode:

* Acessar elementos da página (como `<div>`, `<p>`, `<button>`, etc.)
* Alterar o conteúdo e atributos desses elementos
* Criar, remover ou mover elementos dentro da página
* Reagir a eventos do usuário, como cliques, digitações e movimentos do mouse

## Como o DOM funciona?

O DOM organiza o documento em uma estrutura de **árvore** onde:

* Cada elemento HTML é um **nó** da árvore
* A tag `<html>` é a raiz
* Tags aninhadas são filhas de seus respectivos pais

## Exemplo simples de manipulação DOM:

HTML:

``html
<p id="mensagem">Olá!</p>
<button onclick="mudarMensagem()">Clique aqui</button>
```

JavaScript:

```javascript
function mudarMensagem() {
  document.getElementById("mensagem").textContent = "Você clicou no botão!";
}
```

Esse exemplo mostra como acessar um elemento pelo ID e alterar seu conteúdo de texto usando o DOM.

---

O DOM é uma parte fundamental do desenvolvimento web moderno, e dominar sua manipulação com JavaScript é essencial para qualquer desenvolvedor front-end.

