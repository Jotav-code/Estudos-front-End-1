# HTML5 — Curso Introdutório

## 📖 Definição e Estrutura Básica

Em 1991, Tim Berners-Lee criou essa linguagem de marcação para melhorar a comunicação entre ele e seus colegas de trabalho no CERN. Desde então, já surgiram 5 versões e o HTML se tornou a base da web.

Com o **HTML** definimos o **significado e a estrutura do conteúdo da web**. Além de texto, nossas páginas precisam de imagens, vídeos e vários outros formatos — e para isso temos os **elementos HTML**.

Um elemento HTML é formado por:
- Tag de abertura
- Atributos (opcionais)
- Conteúdo
- Tag de fechamento

> **Obs.:** Alguns elementos não têm tag de fechamento.

Com os elementos HTML podemos:
- Agrupar tipos de conteúdo
- Alterar tamanho e forma de fontes
- Adicionar mídias diversas

### 🧱 Estrutura Básica do HTML5

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <title>Seu Nome</title>
  </head>
  <body>
    Seu Nome
  </body>
</html>
```

- `<!DOCTYPE html>`: Indica que é um documento HTML5.
- `<html>`: Raiz do documento.
- `<head>`: Contém metadados (como `<meta>`, `<title>`, CSS e JS).
- `<body>`: Onde fica todo o conteúdo visível ao usuário.
# 🌐 Semântica no HTML5

A **semântica no HTML5** é o uso de elementos que descrevem com clareza o significado do conteúdo que eles envolvem. Ao invés de utilizar apenas `<div>`s genéricas para estruturar uma página, o HTML5 introduziu várias **tags semânticas** que tornam o código mais legível e acessível.

## ✅ Por que usar elementos semânticos?

- **Melhor acessibilidade**: leitores de tela conseguem entender melhor o conteúdo.
- **SEO aprimorado**: motores de busca entendem melhor a hierarquia e o significado do conteúdo.
- **Facilidade de manutenção**: outros desenvolvedores compreendem a estrutura da página com mais facilidade.
- **Padronização e clareza**: substitui a "sopa de divs" por uma estrutura mais limpa e significativa.

## 🧩 Principais Tags Semânticas

| Tag        | Significado / Uso |
|------------|-------------------|
| `<header>` | Cabeçalho da página ou seção. Pode conter logo, menus, etc. |
| `<nav>`    | Representa um conjunto de links de navegação. |
| `<main>`   | Define o conteúdo principal de um documento. |
| `<section>`| Uma seção genérica de conteúdo. |
| `<article>`| Conteúdo independente, como posts de blog ou artigos de notícias. |
| `<aside>`  | Conteúdo complementar, como barras laterais ou widgets. |
| `<footer>` | Rodapé da página ou de uma seção. Pode conter contatos, direitos autorais, etc. |
| `<h1>`-`<h6>` | Hierarquia de títulos, do mais importante ao menos importante. |

## 📘 Exemplo de Estrutura Semântica

```html
<body>
  <header>
    <h1>Meu Site</h1>
    <nav>
      <a href="#inicio">Início</a>
      <a href="#sobre">Sobre</a>
    </nav>
  </header>

  <main>
    <section>
      <article>
        <header>
          <h2>Post do Blog</h2>
        </header>
        <p>Conteúdo do post...</p>
      </article>
    </section>
  </main>

  <aside>
    <h3>Posts Relacionados</h3>
  </aside>

  <footer>
    <p>Contato: email@exemplo.com</p>
  </footer>
</body>
```

## 📌 Dica

Use **apenas um `<h1>` por página**. Ele representa o objetivo principal da página e ajuda os motores de busca e leitores de tela a compreenderem sua estrutura.

---

A adoção da semântica no HTML5 é um passo fundamental para criar páginas mais acessíveis, organizadas e amigáveis tanto para usuários quanto para desenvolvedores.

# 📝 Semântica de Textos e Links no HTML5

A estruturação correta de textos e links é essencial para a criação de páginas web acessíveis, organizadas e compreensíveis, tanto para humanos quanto para mecanismos de busca.

## 📚 Elementos de Texto

### `<p>` — Parágrafo
Representa um bloco de texto. Pode conter outros elementos como imagens, links e formatação.

```html
<p>Este é um parágrafo de texto.</p>
```

### `<h1>` a `<h6>` — Títulos
Utilizados para marcar a importância dos títulos. O `<h1>` é o mais importante e o `<h6>` o menos.

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
```

> **Dica:** Use apenas **um `<h1>` por página** para representar seu objetivo principal.

## 🔗 Elemento de Link: `<a>`

### O que é?
O elemento `<a>` (âncora) é utilizado para criar **hiperlinks**, que conectam páginas e conteúdos na web.

### Atributos mais comuns:
- `href`: define o destino do link (URL, e-mail, telefone, etc).
- `target`: define como o link será aberto.

```html
<a href="https://meusite.com" target="_blank">Visite meu site</a>
<a href="mailto:exemplo@email.com">Envie um e-mail</a>
<a href="tel:+5511999999999">Ligue para mim</a>
```

### Target="_blank"
Abre o link em **outra aba** do navegador.

## 🧠 Semântica dos Textos e Links

- Usar corretamente `<p>`, `<h1>`-`<h6>`, e `<a>` ajuda na **leitura**, **acessibilidade** e **indexação por mecanismos de busca**.
- Links descritivos (como “Veja nosso portfólio”) são melhores do que genéricos (“Clique aqui”).
- Agrupar links em listas (`<ul>`, `<ol>`) melhora a organização e leitura.

## 💡 Exemplo Completo

```html
<article>
  <header>
    <h2>Como aprender HTML</h2>
  </header>
  <p>
    Para começar, você pode visitar o
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank">MDN Web Docs</a>
    e explorar os recursos sobre HTML. Em caso de dúvidas, envie um e-mail para
    <a href="mailto:contato@exemplo.com">contato@exemplo.com</a>.
  </p>
</article>
```

---

Utilizar a **semântica correta** para textos e links é uma boa prática fundamental para o desenvolvimento web moderno e acessível.

# 🖼️ Imagens no HTML5

As imagens são elementos visuais importantes em qualquer página web. No HTML, utilizamos o elemento `<img>` para exibir imagens.

## 📌 Elemento `<img>`

### Sintaxe básica
```html
<img src="caminho/da-imagem.jpg" alt="Descrição da imagem">
```

### Atributos essenciais:
- `src`: Define o caminho da imagem. Pode ser local ou uma URL.
- `alt`: Texto alternativo descritivo, fundamental para acessibilidade.

### Exemplo:
```html
<img src="/imagens/perfil.jpg" alt="Foto de perfil de João da Silva">
```

## 🧠 Importância do atributo `alt`

- **Acessibilidade**: Leitores de tela utilizam esse texto para descrever a imagem a usuários com deficiência visual.
- **Fallback**: Caso a imagem não carregue, o texto do `alt` será exibido.
- **SEO**: Mecanismos de busca consideram o `alt` para indexar imagens.

## 🚫 Elemento sem fechamento

O `<img>` é um **elemento vazio**, ou seja, **não possui tag de fechamento**. Isso o diferencia da maioria dos elementos HTML.

## 📐 Dicas de boas práticas

- Utilize imagens otimizadas para web (resolução equilibrada e tamanho reduzido).
- Sempre forneça um texto alternativo significativo no `alt`.
- Nomeie os arquivos de imagem de forma descritiva, como `foto-perfil.jpg` ao invés de `IMG1234.jpg`.

## 💡 Exemplo com estilo

```html
<header>
  <img src="/img/logo.png" alt="Logotipo da empresa" width="150" height="150">
  <h1>Nome da Empresa</h1>
</header>
```

---

Utilizar corretamente o elemento `<img>` e seu atributo `alt` é essencial para tornar seu site mais acessível, rápido e eficaz em mecanismos de busca.

# 🎨 Introdução ao CSS3

O CSS (Cascading Style Sheets) é a linguagem responsável pela **estilização** dos elementos HTML em uma página web. Com o CSS3, temos recursos mais avançados para controle de layout, animações, responsividade e muito mais.

## 🧱 O que é CSS?

CSS define como os elementos HTML devem ser exibidos, permitindo alterar:
- Cores
- Fontes
- Espaçamento
- Tamanhos
- Posições
- Efeitos visuais

## 🆕 O que trouxe o CSS3?

O CSS3 é a terceira versão da linguagem, e trouxe importantes melhorias:
- Cantos arredondados com `border-radius`
- Sombras com `box-shadow` e `text-shadow`
- Gradientes com `linear-gradient`
- Animações com `@keyframes`
- Transições com `transition`
- Layouts mais modernos com **Flexbox** e **Grid**

# 🔲 CSS3: Flexbox e Grid

Com a evolução do CSS3, novas técnicas de layout foram introduzidas, facilitando a criação de estruturas modernas, flexíveis e responsivas. As principais ferramentas para isso são o **Flexbox** e o **Grid Layout**.

---

## 🤸 Flexbox

Flexbox (Flexible Box) é um modelo de layout unidimensional. Ele facilita o alinhamento e distribuição dos elementos em **linha** ou **coluna**.

### 📦 Propriedades principais

No contêiner:
```css
display: flex;         /* Ativa o Flexbox */
flex-direction: row;   /* row | row-reverse | column | column-reverse */
justify-content: center; /* Alinhamento horizontal */
align-items: center;     /* Alinhamento vertical */
flex-wrap: wrap;         /* Quebra de linha dos itens */
