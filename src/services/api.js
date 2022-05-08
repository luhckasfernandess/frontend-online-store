const getCategories = async () => {
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const getProductsFromCategoryAndQuery = async (categoryId, query) => {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const getProductDetails = async (productId) => {
  const URL = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const getPictureHighQuality = async (id) => {
  const URL = `https://api.mercadolibre.com/pictures/${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export {
  getCategories,
  getProductsFromCategoryAndQuery,
  getProductDetails,
  getPictureHighQuality,
};
