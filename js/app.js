const formatCurrency = (value) => {
  if (Number.isNaN(Number(value))) return "0,00";
  return Number(value).toFixed(2).replace(".", ",");
};

const getQueryParam = (key) => new URLSearchParams(window.location.search).get(key);

$(document).ready(() => {
  UI.renderGlobalSections();
  UI.bindGlobalEvents();
  UI.updateCartBadge();

  const page = $("body").data("page");

  if (page === "home") {
    const highlights = STORE_PRODUCTS.slice(0, 4);
    const launches = STORE_PRODUCTS.slice(4, 8);
    
    const highlightsCarousel = [...highlights, ...highlights, ...highlights];
    const launchesCarousel = [...launches, ...launches, ...launches];
    
    $("#home-highlights").html(highlightsCarousel.map((prod) => UI.productCard(prod)).join(""));
    $("#home-launches").html(launchesCarousel.map((prod) => UI.productCard(prod)).join(""));
    
    let discountProducts = [...highlights, ...highlights];
    $("#home-discount-grid").html(discountProducts.map((prod) => UI.productCard(prod)).join(""));
    
    const mostBought = STORE_PRODUCTS.slice(0, 8);
    const mostBoughtCarousel = [...mostBought, ...mostBought];
    $("#home-most-grid").html(mostBoughtCarousel.map((prod) => UI.productCard(prod)).join(""));
    UI.attachImageFallback();
    
    let highlightsIndex = 0;
    const $highlightsTrack = $("#home-highlights");
    const cardWidth = 25 + 1.2;
    const maxIndex = 8;
    
    $(".js-highlights-next").on("click", () => {
      if (highlightsIndex < maxIndex) {
        highlightsIndex++;
        $highlightsTrack.css("transform", `translateX(-${highlightsIndex * cardWidth}%)`);
      }
    });
    
    $(".js-highlights-prev").on("click", () => {
      if (highlightsIndex > 0) {
        highlightsIndex--;
        $highlightsTrack.css("transform", `translateX(-${highlightsIndex * cardWidth}%)`);
      }
    });
    
    setInterval(() => {
      highlightsIndex++;
      if (highlightsIndex >= maxIndex) {
        highlightsIndex = 0;
      }
      $highlightsTrack.css("transform", `translateX(-${highlightsIndex * cardWidth}%)`);
    }, 3000);
    
    let launchesIndex = 0;
    const $launchesTrack = $("#home-launches");
    
    $(".js-launches-next").on("click", () => {
      if (launchesIndex < maxIndex) {
        launchesIndex++;
        $launchesTrack.css("transform", `translateX(-${launchesIndex * cardWidth}%)`);
      }
    });
    
    $(".js-launches-prev").on("click", () => {
      if (launchesIndex > 0) {
        launchesIndex--;
        $launchesTrack.css("transform", `translateX(-${launchesIndex * cardWidth}%)`);
      }
    });
    
    setInterval(() => {
      launchesIndex++;
      if (launchesIndex >= maxIndex) {
        launchesIndex = 0;
      }
      $launchesTrack.css("transform", `translateX(-${launchesIndex * cardWidth}%)`);
    }, 3500);
    
    let discountIndex = 0;
    const $discountTrack = $("#home-discount-grid");
    const getDiscountVisible = () => (window.innerWidth <= 768 ? 1 : 2);
    const getDiscountStep = () => {
      const $card = $discountTrack.find(".product-card").first();
      return $card.length ? $card.outerWidth(true) : 0;
    };
    const getDiscountMax = () => {
      const total = $discountTrack.children().length;
      return Math.max(0, total - getDiscountVisible());
    };
    const applyDiscountTransform = () => {
      const step = getDiscountStep();
      $discountTrack.css("transform", `translateX(-${discountIndex * step}px)`);
    };
    
    $(".js-discount-next").on("click", () => {
      const maxDiscountIndex = getDiscountMax();
      if (discountIndex < maxDiscountIndex) {
        discountIndex++;
        applyDiscountTransform();
      }
    });
    
    $(".js-discount-prev").on("click", () => {
      if (discountIndex > 0) {
        discountIndex--;
        applyDiscountTransform();
      }
    });
    
    $(".category-tab").on("click", function() {
      $(".category-tab").removeClass("active");
      $(this).addClass("active");
      discountIndex = 0;
      applyDiscountTransform();
    });

    $(window).on("resize", () => {
      const maxDiscountIndex = getDiscountMax();
      if (discountIndex > maxDiscountIndex) {
        discountIndex = maxDiscountIndex;
      }
      applyDiscountTransform();
    });
    
    let currentSlide = 0;
    const slides = $(".hero-slide");
    const totalSlides = slides.length;
    
    const showSlide = (index) => {
      slides.removeClass("active");
      $(slides[index]).addClass("active");
    };
    
    $(".js-hero-next").on("click", () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    });
    
    $(".js-hero-prev").on("click", () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    });
    
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }, 5000);
    
    let mostBoughtIndex = 0;
    const $mostBoughtTrack = $("#home-most-grid");
    const getMostBoughtVisible = () => (window.innerWidth <= 768 ? 1 : 2);
    const getMostBoughtStep = () => {
      const $card = $mostBoughtTrack.find(".product-card").first();
      return $card.length ? $card.outerWidth(true) : 0;
    };
    const getMostBoughtMax = () => {
      const total = $mostBoughtTrack.children().length;
      return Math.max(0, total - getMostBoughtVisible());
    };
    const applyMostBoughtTransform = () => {
      const step = getMostBoughtStep();
      $mostBoughtTrack.css("transform", `translateX(-${mostBoughtIndex * step}px)`);
    };
    
    $(".js-most-bought-next").on("click", () => {
      const maxMostBoughtIndex = getMostBoughtMax();
      if (mostBoughtIndex < maxMostBoughtIndex) {
        mostBoughtIndex++;
        applyMostBoughtTransform();
      }
    });
    
    $(".js-most-bought-prev").on("click", () => {
      if (mostBoughtIndex > 0) {
        mostBoughtIndex--;
        applyMostBoughtTransform();
      }
    });
    
    $(".most-bought-tab").on("click", function() {
      $(".most-bought-tab").removeClass("active");
      $(this).addClass("active");
      mostBoughtIndex = 0;
      applyMostBoughtTransform();
    });

    $(window).on("resize", () => {
      const maxMostBoughtIndex = getMostBoughtMax();
      if (mostBoughtIndex > maxMostBoughtIndex) {
        mostBoughtIndex = maxMostBoughtIndex;
      }
      applyMostBoughtTransform();
    });
  }

  if (page === "category") {
    const category = getQueryParam("cat");
    UI.renderCategoryPage(category);
  }

  if (page === "product") {
    const productId = getQueryParam("id");
    UI.renderProductPage(productId);
  }

  if (page === "cart") {
    UI.renderCartPage();
  }

  UI.attachImageFallback();
});
