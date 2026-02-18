const UI = (() => {
  const headerTemplate = () => `
    <div class="top-info-bar">
      <div class="lilac-container">
        <div class="top-info-bar-inner">
          <div class="top-info-icons-left">
            <a href="#" class="top-info-icon" title="WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" class="top-info-icon" title="Telefone">
              <i class="fa-solid fa-phone"></i>
            </a>
          </div>
          
          <span class="top-info-text">Digite o texto informativo aqui</span>
          
          <div class="top-info-icons-right">
            <a href="#" class="top-info-icon" title="Facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="top-info-icon" title="Instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <header class="py-4">
      <div class="lilac-container">
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <button class="js-open-drawer header-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            
            <div class="search-wrapper">
              <button class="js-open-search header-icon-btn header-icon-btn-outline" id="search-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.65" y1="16.65" x2="21" y2="21" />
                </svg>
              </button>
              
              <!-- Search Bar (Expanded State) -->
              <div class="search-bar-expanded" id="search-bar-expanded">
                <svg class="search-bar-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.65" y1="16.65" x2="21" y2="21" />
                </svg>
                <input type="text" class="search-bar-input" placeholder="Digite o que você procura" />
                <button class="search-bar-close js-close-search">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <a href="/index.html" class="header-logo" aria-label="LILAC">
            <svg width="127" height="31" viewBox="0 0 127 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.37432 0V23.3058H20.7866L22.9095 30.4024H8.37432H0V23.3058V0H8.37432ZM48.2722 0V23.3031H62.8074V30.3933L71.5787 0H87.1447L96.2408 30.4024H87.3285L85.1417 21.9937H73.9333L71.7784 30.4024H62.8048L62.8056 30.3998H22.9095V23.3031H27.2752V7.09664H22.9095V0H48.2722ZM35.5909 7.09664V23.3031H39.8979V7.09664H35.5909ZM75.5527 15.67L79.4949 0.281528L83.4982 15.67H75.5527ZM116.007 21.2156C116.945 20.4214 117.512 19.2289 117.712 17.638V17.6433H126.385C125.985 19.9885 125.128 22.185 123.812 24.2327C122.496 26.2831 120.671 27.9218 118.338 29.1541C116.007 30.3865 113.107 31.0027 109.636 31.0027C106.445 31.0027 103.534 30.3652 100.902 29.093C98.2706 27.8209 96.177 25.9112 94.6214 23.3669C93.0686 20.8225 92.3094 17.6593 92.3494 13.8825C92.3894 10.1855 93.1751 7.01431 94.712 4.369C95.7108 2.64531 96.9494 1.19251 98.4171 0H121.276C122.254 0.833962 123.093 1.7715 123.782 2.81794C125.077 4.78598 125.905 6.90541 126.265 9.17092H117.651C117.451 7.6597 116.884 6.54421 115.946 5.82976C115.009 5.11266 113.972 4.64522 112.835 4.42743C111.698 4.20965 110.691 4.10075 109.815 4.10075C106.703 4.10075 104.391 4.9055 102.876 6.51499C101.36 8.12449 100.604 10.3608 100.604 13.2239C100.604 16.3658 101.342 18.8093 102.817 20.5595C104.293 22.3098 106.605 23.1836 109.756 23.1836C110.672 23.1836 111.711 23.0561 112.867 22.7958C114.023 22.5382 115.07 22.0123 116.007 21.2156Z" fill="#D2AFFF"/>
            </svg>
          </a>
          
          <div class="flex items-center gap-3">
            <div class="user-menu-wrapper">
              <div class="user-menu-expanded" id="user-menu-expanded">
                <a href="/register.html" class="user-menu-link">Cadastrar</a>
                <a href="/login.html" class="user-menu-link">Entrar</a>
              </div>
              <button class="header-icon-btn header-icon-btn-outline js-toggle-user-menu" id="user-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6" />
                </svg>
              </button>
            </div>
            <button class="js-open-cart relative header-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span id="cart-count" class="cart-badge" style="display:none">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `;

  const drawerTemplate = () => `
    <div class="drawer" id="mobile-drawer">
      <div class="drawer-dropdown">
        <div class="drawer-header">
          <button class="drawer-menu-btn js-close-drawer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M3 6H21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
              <path d="M3 18H21" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
          </button>
          <h2 class="drawer-title">MAIS CATEGORIAS</h2>
        </div>
        <div class="drawer-categories">
          <div class="drawer-category-item">
            <a href="/category.html?cat=camisetas" class="drawer-category-link">Camisetas</a>
            <button class="drawer-category-arrow">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="drawer-category-item">
            <a href="/category.html?cat=calcados" class="drawer-category-link">Calçados</a>
          </div>
          <div class="drawer-category-item">
            <a href="/category.html?cat=bolsas" class="drawer-category-link">Bolsas</a>
            <button class="drawer-category-arrow">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="drawer-category-item">
            <a href="/category.html?cat=oculos" class="drawer-category-link">Óculos</a>
          </div>
        </div>
        
        <div class="drawer-mobile-only">
          <div class="drawer-social-icons">
            <a href="#" class="drawer-social-icon">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" class="drawer-social-icon">
              <i class="fa-solid fa-phone"></i>
            </a>
            <a href="#" class="drawer-social-icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" class="drawer-social-icon">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          
          <div class="drawer-auth-buttons">
            <a href="/login.html" class="drawer-auth-btn">Entrar</a>
            <a href="/register.html" class="drawer-auth-btn">Cadastrar</a>
          </div>
        </div>
      </div>
    </div>
  `;

  const cartDrawerTemplate = () => `
    <div class="cart-drawer" id="cart-drawer">
      <div class="cart-drawer-panel">
        <div class="cart-drawer-header">
          <h2 class="cart-drawer-title">SACOLA</h2>
          <button class="js-close-cart cart-drawer-close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="cart-drawer-items" id="cart-drawer-items">
          <!-- Items serão inseridos aqui -->
        </div>
        <div class="cart-drawer-footer">
          <div class="cart-drawer-subtotal">
            <span>Sub-total</span>
            <span id="cart-drawer-subtotal">R$ 0,00</span>
          </div>
          <a href="/cart.html" class="cart-drawer-btn">Finalizar compra</a>
          <button class="js-close-cart cart-drawer-continue">Continuar comprando</button>
        </div>
      </div>
    </div>
  `;

  const benefitsTemplate = () => `
    <section id="benefits" class="py-12 md:py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="benefits-carousel-wrapper">
          <button class="benefits-arrow benefits-arrow-left js-benefits-prev">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M8 2L2 8L8 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div>
            <div class="benefits-section benefits-carousel-track">
            <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fa-solid fa-truck"></i>
              </div>
              <div class="benefit-content">
                <h3 class="benefit-title">Entrega rápida</h3>
                <p class="benefit-subtitle">Para todo o país</p>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fa-solid fa-credit-card"></i>
              </div>
              <div class="benefit-content">
                <h3 class="benefit-title">Parcele suas compras</h3>
                <p class="benefit-subtitle">Em todos os cartões de crédito</p>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fa-solid fa-lock"></i>
              </div>
              <div class="benefit-content">
                <h3 class="benefit-title">Loja segura</h3>
                <p class="benefit-subtitle">Compre com segurança</p>
              </div>
            </div>

            <div class="benefit-item">
              <div class="benefit-icon">
                <i class="fa-solid fa-box"></i>
              </div>
              <div class="benefit-content">
                <h3 class="benefit-title">Todos os produtos</h3>
                <p class="benefit-subtitle">Estão à pronta entrega</p>
              </div>
            </div>
            </div>
          </div>
          <button class="benefits-arrow benefits-arrow-right js-benefits-next">
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path d="M2 2L8 8L2 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div class="benefits-dots"></div>
      </div>
    </section>
  `;

  const newsletterTemplate = () => `
    <section class="newsletter">
      <div class="newsletter-inner">
        <div class="newsletter-icon">
          <i class="fa-solid fa-envelope"></i>
        </div>
        <h3 class="newsletter-title">NEWSLETTER</h3>
        <p class="newsletter-subtitle">Digite seu e-mail abaixo e se cadastre para receber novidades!</p>
        <form class="newsletter-form" action="#" novalidate>
          <div class="newsletter-input-wrap">
            <span class="newsletter-input-icon">
              <i class="fa-solid fa-envelope"></i>
            </span>
            <input type="email" placeholder="Digite seu e-mail aqui" class="newsletter-input" />
            <button class="newsletter-btn" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  `;

  const footerTemplate = () => `
    <footer class="pt-10">
      <div class="lilac-container">
        <div class="footer-shell grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div class="footer-social-box">
              <h4 class="font-semibold mb-3 footer-social-title">Redes sociais</h4>
              <a class="footer-social-item" href="#" aria-label="Instagram">
                <span class="footer-social-left">
                  <i class="fa-brands fa-instagram"></i>
                  <span>Instagram</span>
                </span>
                <i class="fa-solid fa-chevron-right footer-social-arrow"></i>
              </a>
              <a class="footer-social-item" href="#" aria-label="Facebook">
                <span class="footer-social-left">
                  <i class="fa-brands fa-facebook-f"></i>
                  <span>Facebook</span>
                </span>
                <i class="fa-solid fa-chevron-right footer-social-arrow"></i>
              </a>
              <a class="footer-social-item" href="#" aria-label="TikTok">
                <span class="footer-social-left">
                  <i class="fa-brands fa-tiktok"></i>
                  <span>Tiktok</span>
                </span>
                <i class="fa-solid fa-chevron-right footer-social-arrow"></i>
              </a>
              <a class="footer-social-item" href="#" aria-label="YouTube">
                <span class="footer-social-left">
                  <i class="fa-brands fa-youtube"></i>
                  <span>YouTube</span>
                </span>
                <i class="fa-solid fa-chevron-right footer-social-arrow"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 class="font-semibold mb-3">Institucional</h4>
            <ul class="space-y-2">
              <li><a class="footer-link" href="#">Quem somos</a></li>
              <li><a class="footer-link" href="#">Trocas e devoluções</a></li>
              <li><a class="footer-link" href="#">Política de privacidade</a></li>
              <li><a class="footer-link" href="#">Entrega</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-3">Minha conta</h4>
            <ul class="space-y-2">
              <li><a class="footer-link" href="/login.html">Fale conosco</a></li>
              <li><a class="footer-link" href="/login.html">Meus dados</a></li>
              <li><a class="footer-link" href="/cart.html">Meu pedido</a></li>
              <li><a class="footer-link" href="/login.html">Login do site</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-3">Categorias</h4>
            <ul class="space-y-2">
              <li><a class="footer-link" href="/category.html?cat=camisetas">Camisetas</a></li>
              <li><a class="footer-link" href="/category.html?cat=calcados">Calçados</a></li>
              <li><a class="footer-link" href="/category.html?cat=bolsas">Bolsas</a></li>
              <li><a class="footer-link" href="/category.html?cat=oculos">Óculos</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-3">Fale conosco</h4>
            <p class="footer-link">Telefone: (31) 9999-9999</p>
            <p class="footer-link">Whatsapp: (31) 99999-9999</p>
            <p class="footer-link">contato@lilac.com.br</p>
            <p class="footer-link mt-2">Rua Dom Pedro I, 123</p>
            <p class="footer-link">São José, Franca - SP</p>
          </div>
        </div>
      </div>
    </footer>
  `;

  const productCard = (product, extraClass = "") => `
    <div class="product-card ${extraClass}">
      <div class="product-card-image">
        <span class="product-badge">${product.discountLabel || "20% off"}</span>
        <a href="/product.html?id=${product.id}">
          <img data-fallback src="${product.img}" alt="${product.name}" />
        </a>
      </div>
      <div class="product-card-info">
        <p class="product-card-title">${product.name}</p>
        <div class="product-card-prices">
          <span class="product-price-old">R$ ${formatCurrency(product.oldPrice)}</span>
          <span class="product-price-current">R$ ${formatCurrency(product.price)}</span>
        </div>
        <p class="product-card-installments">${product.installmentsText}</p>
      </div>
    </div>
  `;

  const updateCartBadge = () => {
    const count = getCartCount();
    const $badge = $("#cart-count");
    if (!$badge.length) return;

    count > 0 ? $badge.text(count).show() : $badge.hide();
  };

  const attachImageFallback = () => {
    $("img[data-fallback]")
      .off("error")
      .on("error", function() {
        $(this).closest(".img-wrap").addClass("is-broken");
        $(this).attr("src", "");
      });
  };

  const renderCategoryPage = (category) => {
    const products = category ? STORE_PRODUCTS.filter((prod) => prod.category === category) : STORE_PRODUCTS;
    $("#category-title").text(category ? category.toUpperCase() : "PRODUTOS");
    $("#category-breadcrumb").text(category ? `Home / ${category}` : "Home / Produtos");
    const cards = products.map((prod) => productCard(prod)).join("");
    $("#category-grid").html(cards || "<p>Nenhum produto encontrado.</p>");
    attachImageFallback();
  };

  const renderProductPage = (productId) => {
    const product = STORE_PRODUCTS.find((prod) => prod.id === Number(productId)) || STORE_PRODUCTS[0];
    if (!product) return;

    const thumbs = product.images
      .map(
        (img) => `
        <button class="img-wrap h-20 js-thumb" data-img="${img}">
          <img data-fallback src="${img}" alt="${product.name}" />
          <span class="img-fallback-text">Imagem</span>
        </button>
      `
      )
      .join("");

    $("#product-thumbs").html(thumbs);
    $("#product-main-img").attr("src", product.images[0] || product.img);
    $("#product-title").text(product.name);
    $("#product-price").text(`R$ ${formatCurrency(product.price)}`);
    $("#product-old-price").text(`R$ ${formatCurrency(product.oldPrice)}`);
    $("#product-discount").text(product.discountLabel);
    $("#product-buy-btn").attr("data-product-id", product.id);

    const sizes = product.sizes
      .map(
        (size) => `
        <button class="lilac-pill js-size-btn" data-size="${size}">${size}</button>
      `
      )
      .join("");
    $("#product-sizes").html(sizes);

    const related = STORE_PRODUCTS.filter((prod) => prod.id !== product.id).slice(0, 4);
    $("#related-grid").html(related.map((prod) => productCard(prod)).join(""));
    $("#buy-together-grid").html(related.map((prod) => productCard(prod)).join(""));

    attachImageFallback();
  };

  const renderCartPage = () => {
    const cart = getCart();
    if (!cart.length) {
      $("#cart-items").html(
        `<div class="lilac-card p-6 text-center">Seu carrinho está vazio.</div>`
      );
      $("#cart-subtotal").text("R$ 0,00");
      return;
    }

    const itemsHtml = cart
      .map((item) => {
        const product = STORE_PRODUCTS.find((prod) => prod.id === item.productId);
        if (!product) return "";
        return `
          <div class="lilac-card p-4 flex flex-col md:flex-row gap-4 items-center" data-product-id="${product.id}" data-size="${item.size || ""}">
            <div class="img-wrap w-24 h-24">
              <img data-fallback src="${product.img}" alt="${product.name}" />
              <span class="img-fallback-text">Imagem</span>
            </div>
            <div class="flex-1">
              <p class="font-semibold">${product.name}</p>
              <p class="text-sm text-lilac-muted">Tamanho: ${item.size || "-"}</p>
              <p class="text-sm">Preço unitário: R$ ${formatCurrency(product.price)}</p>
              <button class="text-xs text-lilac-primary mt-1 js-remove-item">Remover</button>
            </div>
            <div class="flex items-center gap-3">
              <button class="qty-btn js-qty-minus">-</button>
              <span class="font-semibold js-qty-value">${item.qty}</span>
              <button class="qty-btn js-qty-plus">+</button>
            </div>
            <div class="text-right font-semibold">R$ ${formatCurrency(product.price * item.qty)}</div>
          </div>
        `;
      })
      .join("");

    $("#cart-items").html(itemsHtml);
    $("#cart-subtotal").text(`R$ ${formatCurrency(getCartSubtotal())}`);
    attachImageFallback();
  };

  const bindGlobalEvents = () => {
    $(document).on("click", ".js-open-drawer", (e) => {
      e.stopPropagation();
      $("#mobile-drawer").addClass("open");
    });

    $(document).on("click", ".js-close-drawer", () => {
      $("#mobile-drawer").removeClass("open");
    });

    $(document).on("click", "#mobile-drawer", (e) => {
      if ($(e.target).is("#mobile-drawer")) {
        $("#mobile-drawer").removeClass("open");
      }
    });

    $(document).on("click", ".drawer-dropdown", (e) => {
      e.stopPropagation();
    });

    $(document).on("click", ".js-open-cart", (e) => {
      e.stopPropagation();
      $("#cart-drawer").addClass("open");
      updateCartDrawer();
    });

    $(document).on("click", ".js-close-cart", () => {
      $("#cart-drawer").removeClass("open");
    });

    $(document).on("click", "#cart-drawer", (e) => {
      if ($(e.target).is("#cart-drawer")) {
        $("#cart-drawer").removeClass("open");
      }
    });

    $(document).on("click", ".cart-drawer-panel", (e) => {
      e.stopPropagation();
    });

    $(document).on("click", ".js-open-search", () => {
      $("#search-btn").css({ opacity: 0, pointerEvents: "none" });
      $("#search-bar-expanded").addClass("active");
      setTimeout(() => {
        $("#search-bar-expanded .search-bar-input").focus();
      }, 300);
    });

    $(document).on("click", ".js-close-search", () => {
      $("#search-bar-expanded").removeClass("active");
      $("#search-bar-expanded .search-bar-input").val("");
      setTimeout(() => {
        $("#search-btn").css({ opacity: 1, pointerEvents: "auto" });
      }, 300);
    });

    $(document).on("click", ".js-toggle-user-menu", (e) => {
      e.stopPropagation();
      const isActive = $("#user-menu-expanded").hasClass("active");
      
      if (isActive) {
        $("#user-menu-expanded").removeClass("active");
      } else {
        $("#user-menu-expanded").addClass("active");
      }
    });

    $(document).on("click", (e) => {
      if (!$(e.target).closest(".user-menu-wrapper").length) {
        $("#user-menu-expanded").removeClass("active");
      }
    });

    $(document).on("click", ".js-add-to-cart", function () {
      const productId = Number($(this).data("product-id"));
      const size = $(this).data("size") || $(".js-size-btn.active").data("size") || null;
      addToCart(productId, 1, size);
      updateCartBadge();
      updateCartDrawer();
      if ($("body").data("page") === "cart") {
        renderCartPage();
      }
    });

    $(document).on("click", ".js-size-btn", function () {
      $(".js-size-btn").removeClass("active");
      $(this).addClass("active");
    });

    $(document).on("click", ".js-thumb", function () {
      const img = $(this).data("img");
      $("#product-main-img").attr("src", img);
    });

    $(document).on("click", ".js-qty-minus", function () {
      const $item = $(this).closest("[data-product-id]");
      const productId = Number($item.data("product-id"));
      const size = $item.data("size") || null;
      const currentQty = Number($item.find(".js-qty-value").text()) || 1;
      updateQty(productId, size, Math.max(1, currentQty - 1));
      renderCartPage();
      updateCartBadge();
    });

    $(document).on("click", ".js-qty-plus", function () {
      const $item = $(this).closest("[data-product-id]");
      const productId = Number($item.data("product-id"));
      const size = $item.data("size") || null;
      const currentQty = Number($item.find(".js-qty-value").text()) || 1;
      updateQty(productId, size, currentQty + 1);
      renderCartPage();
      updateCartBadge();
    });

    $(document).on("click", ".js-remove-item", function () {
      const $item = $(this).closest("[data-product-id]");
      const productId = Number($item.data("product-id"));
      const size = $item.data("size") || null;
      removeFromCart(productId, size);
      renderCartPage();
      updateCartBadge();
      updateCartDrawer();
    });

    $(document).on("click", ".js-clear-cart", function () {
      clearCart();
      renderCartPage();
      updateCartBadge();
      updateCartDrawer();
    });
  };

  const updateCartDrawer = () => {
    const cart = getCart();
    const $items = $("#cart-drawer-items");
    
    if (cart.length === 0) {
      $items.html('<div class="cart-drawer-empty">Sua sacola está vazia</div>');
      $("#cart-drawer-subtotal").text("R$ 0,00");
      return;
    }

    let html = "";
    cart.forEach((item) => {
      const product = STORE_PRODUCTS.find((p) => Number(p.id) === Number(item.productId));
      if (!product) return;
      
      html += `
        <div class="cart-drawer-item" data-product-id="${item.productId}" data-size="${item.size || ''}">
          <div class="cart-drawer-item-img">
            <img src="${product.img}" alt="${product.name}">
          </div>
          <div class="cart-drawer-item-info">
            <h4 class="cart-drawer-item-title">${product.name}</h4>
            <p class="cart-drawer-item-price">R$ ${formatCurrency(product.price)}</p>
            ${item.size ? `<p class="cart-drawer-item-size">Tamanho: ${item.size}</p>` : ''}
          </div>
          <button class="js-remove-item cart-drawer-item-remove">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `;
    });

    if (!html) {
      $items.html('<div class="cart-drawer-empty">Sua sacola está vazia</div>');
      $("#cart-drawer-subtotal").text("R$ 0,00");
      return;
    }

    $items.html(html);
    $("#cart-drawer-subtotal").text(`R$ ${formatCurrency(getCartSubtotal())}`);
  };

  const renderGlobalSections = () => {
    $("#site-header").html(headerTemplate());
    $("#mobile-drawer").replaceWith(drawerTemplate());
    
    if (!$("#cart-drawer").length) {
      $("body").append(cartDrawerTemplate());
    }
    
    $("#benefits").html(benefitsTemplate());
    $("#newsletter").html(newsletterTemplate());
    $("#site-footer").html(footerTemplate());
  };

  return {
    renderGlobalSections,
    renderCategoryPage,
    renderProductPage,
    renderCartPage,
    productCard,
    bindGlobalEvents,
    updateCartBadge,
    attachImageFallback
  };
})();
