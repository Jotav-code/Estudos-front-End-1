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