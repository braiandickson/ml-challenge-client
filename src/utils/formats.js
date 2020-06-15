export const formatProductRoute = (id) => {
  return `/items/${id}`;
};

export const formatPrice = (price) => {
  const { currency, amount, decimals } = price;
  return decimals ? `${currency}${amount}.${decimals}` : `${currency}${amount}`;
};

export const formatNameToUrl = (name) => {
  return name.toLowerCase().replace(/\s/g, '-').replace(/\//g, '');
};
