# Lilac Store (Teste Front-End)

## Visão geral
Projeto front-end completo com HTML5, Tailwind via CDN, CSS personalizado e jQuery, seguindo a identidade visual do Figma. Inclui home, listagem, produto, carrinho e telas de login/cadastro, além de carrinho persistente em localStorage.

## Checklist de requisitos atendidos
- [x] Tailwind via CDN em todas as páginas
- [x] CSS extra em /css/styles.css
- [x] jQuery via CDN e scripts na ordem correta
- [x] Carrinho persistente com localStorage (chave lilac_cart)
- [x] Badge do carrinho atualiza imediatamente
- [x] Filtro por categoria via querystring
- [x] Página de produto via querystring
- [x] Home com card levando para product.html?id=1
- [x] Layout responsivo (desktop e mobile)
- [x] Estrutura de pastas solicitada

## Como rodar localmente
### Opção 1: Live Server (VSCode)
1. Abra a pasta do projeto no VSCode.
2. Clique com o botão direito em index.html.
3. Selecione “Open with Live Server”.

### Opção 2: servidor simples
1. No terminal, execute: npx serve
2. Abra a URL exibida no terminal.

## Estrutura de pastas
- index.html
- category.html
- product.html
- login.html
- register.html
- cart.html
- /assets
  - /img
  - /icons
- /css
  - styles.css
- /js
  - store.js
  - cart.js
  - ui.js
  - app.js

## Imagens necessárias (coloque exatamente nesses caminhos)
### Produtos
- /assets/img/products/shirt.png
- /assets/img/products/shoe.png
- /assets/img/products/bag.png
- /assets/img/products/glasses.png

### Banners
- /assets/img/banners/hero-1.png
- /assets/img/banners/banner-1.png
- /assets/img/banners/banner-2.png
- /assets/img/banners/banner-3.png
- /assets/img/banners/discount-1.png
- /assets/img/banners/most-1.png

## Como testar o carrinho
1. Abra index.html.
2. Clique em “Adicionar” em qualquer produto.
3. Verifique o badge do carrinho no header.
4. Atualize a página (F5) e confirme que o badge permanece.
5. Acesse cart.html para ver a lista de itens e subtotal.
6. Use os botões “+” e “-” para ajustar quantidade em tempo real.

## Observações
- Persistência feita com localStorage na chave lilac_cart.
- Navegação de categoria usa querystring ?cat=camisetas|calcados|bolsas|oculos.
- Navegação de produto usa querystring ?id=1.
