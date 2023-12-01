const formatCurrency = (value) => {
  const formatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(value / 100);
};

export default formatCurrency;
