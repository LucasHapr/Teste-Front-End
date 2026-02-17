const CART_STORAGE_KEY = "lilac_cart";

const getCart = () => {
  try {
    const data = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
};

const saveCart = (cart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

const findCartItemIndex = (cart, productId, size) =>
  cart.findIndex(
    (item) => item.productId === productId && (item.size || null) === (size || null)
  );

const addToCart = (productId, qty = 1, size = null) => {
  const cart = getCart();
  const index = findCartItemIndex(cart, productId, size);
  if (index >= 0) {
    cart[index].qty += qty;
  } else {
    cart.push({ productId, qty, size: size || null });
  }
  saveCart(cart);
  return cart;
};

const removeFromCart = (productId, size = null) => {
  const cart = getCart().filter(
    (item) => !(item.productId === productId && (item.size || null) === (size || null))
  );
  saveCart(cart);
  return cart;
};

const updateQty = (productId, size = null, qty) => {
  const cart = getCart();
  const index = findCartItemIndex(cart, productId, size);
  if (index >= 0) {
    cart[index].qty = Math.max(1, qty);
  }
  saveCart(cart);
  return cart;
};

const getCartCount = () =>
  getCart().reduce((total, item) => total + (item.qty || 0), 0);

const clearCart = () => {
  saveCart([]);
};

const getCartSubtotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => {
    const product = STORE_PRODUCTS.find((prod) => prod.id === item.productId);
    if (!product) return total;
    return total + product.price * item.qty;
  }, 0);
};
