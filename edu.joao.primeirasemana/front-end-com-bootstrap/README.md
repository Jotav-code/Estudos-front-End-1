# 🚀 Introdução ao Bootstrap

**Bootstrap** é um dos frameworks front-end mais populares do mundo, desenvolvido originalmente pelo Twitter. Ele facilita a criação de sites responsivos e modernos com pouco esforço, utilizando HTML, CSS e JavaScript prontos para uso.

---

## 🧱 Principais características

* **Sistema de Grid** responsivo baseado em 12 colunas
* **Componentes prontos** como botões, cards, formulários, navegação, etc.
* **Utilitários CSS** para espaçamento, cores, tipografia, alinhamento e muito mais
* **JavaScript embutido** para funcionalidades como modais, carrosséis e dropdowns

---

## ⚙️ Como usar o Bootstrap

### 1. Via CDN (forma mais rápida)

Adicione as seguintes linhas dentro da tag `<head>` do seu HTML:

```html
<!-- CSS do Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- JavaScript do Bootstrap (opcional, para componentes interativos) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

---

### 2. Estrutura básica com Bootstrap

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu Site com Bootstrap</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container">
    <h1 class="text-center my-5">Olá, mundo!</h1>
    <p class="lead">Este é um exemplo usando o Bootstrap 5.</p>
  </div>

</body>
</html>
```

---

## 🧩 Componentes úteis

* `btn`, `btn-primary`, `btn-success` – Botões
* `card`, `card-body` – Cartões de conteúdo
* `navbar`, `nav`, `dropdown` – Navegação
* `form-control`, `input-group`, `form-check` – Formulários

---

## 🎯 Sistema de Grid

Criação de layout com colunas e linhas:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Coluna 1</div>
    <div class="col-md-6">Coluna 2</div>
  </div>
</div>
```

---

## 📱 Responsividade facilitada

Classes como `d-none`, `d-md-block`, `text-center`, `mx-auto`, e outras ajudam a controlar visibilidade e layout em diferentes tamanhos de tela.

---

## 📚 Documentação oficial

Acesse a documentação completa em:
👉 [https://getbootstrap.com](https://getbootstrap.com)

---

## ✅ Conclusão

Bootstrap é ideal para quem quer desenvolver interfaces modernas com rapidez e responsividade sem ter que escrever muito código CSS do zero. Perfeito para projetos pessoais, profissionais e educacionais.
