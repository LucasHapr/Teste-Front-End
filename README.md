# Lilac Store

E-commerce front-end desenvolvido com HTML, CSS e jQuery.

## Tecnologias
- HTML5
- Tailwind CSS via CDN
- CSS customizado
- jQuery 3.7.1
- LocalStorage

## Como executar

**Live Server (VSCode)**
```
Botão direito em index.html → Open with Live Server
```

**Servidor HTTP simples**
```bash
npx serve
```

## Estrutura do projeto
```
├── index.html
├── category.html  
├── product.html
├── cart.html
├── login.html
├── register.html
├── assets/
│   └── img/
│       ├── products/
│       ├── banners/
│       └── info-icons/
├── css/
│   └── styles.css
└── js/
    ├── store.js
    ├── cart.js
    ├── ui.js
    └── app.js
```

## Funcionalidades
- Carrossel de produtos com autoplay
- Sistema de categorias
- Carrinho de compras persistente
- Menu mobile responsivo
- Drawer lateral para sacola
- Cálculo de subtotal
- Navegação dinâmica

## Notas técnicas
- Carrinho armazenado em localStorage (chave: `lilac_cart`)
- Categorias via querystring: `?cat=camisetas|calcados|bolsas|oculos`
- Produtos via querystring: `?id=1`
- Layout responsivo com breakpoints em 768px e 480px
