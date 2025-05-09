/**
 * Форматирует цену в соответствии с российским форматом
 * @param {number} price - цена для форматирования
 * @returns {string} - отформатированная цена
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
};

export default formatPrice; 