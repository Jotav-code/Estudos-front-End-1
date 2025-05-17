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
