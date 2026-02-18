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
    
    setTimeout(() => {
      if (window.innerWidth <= 768) {
        let benefitsIndex = 0;
        const $benefitsTrack = $(".benefits-carousel-track");
        const benefitsCount = $benefitsTrack.find(".benefit-item").length;
        
        const $dotsContainer = $(".benefits-dots");
        for (let i = 0; i < benefitsCount; i++) {
          $dotsContainer.append(`<button class="benefits-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></button>`);
        }
        
        const updateBenefitsDots = () => {
          $(".benefits-dot").removeClass("active");
          $(`.benefits-dot[data-index="${benefitsIndex}"]`).addClass("active");
        };
        
        const scrollToBenefit = (index) => {
          benefitsIndex = index;
          $benefitsTrack.css("transform", `translateX(-${benefitsIndex * 100}%)`);
          updateBenefitsDots();
        };
        
        $(document).off("click", ".js-benefits-prev").on("click", ".js-benefits-prev", (e) => {
          e.preventDefault();
          console.log("Prev clicked, current index:", benefitsIndex);
          if (benefitsIndex > 0) {
            scrollToBenefit(benefitsIndex - 1);
          }
        });
        
        $(document).off("click", ".js-benefits-next").on("click", ".js-benefits-next", (e) => {
          e.preventDefault();
          console.log("Next clicked, current index:", benefitsIndex);
          if (benefitsIndex < benefitsCount - 1) {
            scrollToBenefit(benefitsIndex + 1);
          }
        });
        
        $(document).on("click", ".benefits-dot", function() {
          scrollToBenefit($(this).data("index"));
        });
        
        let benefitsStartX = 0;
        let benefitsCurrentX = 0;
        
        $benefitsTrack.on("touchstart", (e) => {
          benefitsStartX = e.touches[0].clientX;
        });
        
        $benefitsTrack.on("touchmove", (e) => {
          benefitsCurrentX = e.touches[0].clientX;
        });
        
        $benefitsTrack.on("touchend", () => {
          const diff = benefitsStartX - benefitsCurrentX;
          if (Math.abs(diff) > 50) {
            if (diff > 0 && benefitsIndex < benefitsCount - 1) {
              scrollToBenefit(benefitsIndex + 1);
            } else if (diff < 0 && benefitsIndex > 0) {
              scrollToBenefit(benefitsIndex - 1);
            }
          }
        });
      }
    }, 100);
    
    let highlightsIndex = 0;
    const $highlightsTrack = $("#home-highlights");
    const maxIndex = 8;
    const applyHighlightsTransform = () => {
      if (window.innerWidth <= 768) {
        const $card = $highlightsTrack.find(".product-card").first();
        const gap = parseFloat($highlightsTrack.css("gap")) || 0;
        const step = $card.length ? $card.outerWidth() + gap : 0;
        $highlightsTrack.css("transform", `translateX(-${highlightsIndex * step}px)`);
        return;
      }
      const desktopCardWidth = 25 + 1.2;
      $highlightsTrack.css("transform", `translateX(-${highlightsIndex * desktopCardWidth}%)`);
    };
    
    $(".js-highlights-next").on("click", () => {
      if (highlightsIndex < maxIndex) {
        highlightsIndex++;
        applyHighlightsTransform();
      }
    });
    
    $(".js-highlights-prev").on("click", () => {
      if (highlightsIndex > 0) {
        highlightsIndex--;
        applyHighlightsTransform();
      }
    });
    
    setInterval(() => {
      highlightsIndex++;
      if (highlightsIndex >= maxIndex) {
        highlightsIndex = 0;
      }
      applyHighlightsTransform();
    }, 3000);
    
    let launchesIndex = 0;
    const $launchesTrack = $("#home-launches");
    const applyLaunchesTransform = () => {
      if (window.innerWidth <= 768) {
        const $card = $launchesTrack.find(".product-card").first();
        const gap = parseFloat($launchesTrack.css("gap")) || 0;
        const step = $card.length ? $card.outerWidth() + gap : 0;
        $launchesTrack.css("transform", `translateX(-${launchesIndex * step}px)`);
        return;
      }
      const desktopCardWidth = 25 + 1.2;
      $launchesTrack.css("transform", `translateX(-${launchesIndex * desktopCardWidth}%)`);
    };
    
    $(".js-launches-next").on("click", () => {
      if (launchesIndex < maxIndex) {
        launchesIndex++;
        applyLaunchesTransform();
      }
    });
    
    $(".js-launches-prev").on("click", () => {
      if (launchesIndex > 0) {
        launchesIndex--;
        applyLaunchesTransform();
      }
    });
    
    setInterval(() => {
      launchesIndex++;
      if (launchesIndex >= maxIndex) {
        launchesIndex = 0;
      }
      applyLaunchesTransform();
    }, 3500);
    
    let discountIndex = 0;
    const $discountTrack = $("#home-discount-grid");
    const getDiscountVisible = () => (window.innerWidth <= 768 ? 1 : 2);
    const getDiscountStep = () => {
      const $card = $discountTrack.find(".product-card").first();
      const gap = parseFloat($discountTrack.css("gap")) || 0;
      return $card.length ? $card.outerWidth() + gap : 0;
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
      const gap = parseFloat($mostBoughtTrack.css("gap")) || 0;
      return $card.length ? $card.outerWidth() + gap : 0;
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
