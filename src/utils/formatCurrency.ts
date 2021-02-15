const formatCurrency = (value: number, currency = 'USD'): string => {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  })
    .format(value)
    .replace(/^(\D+)/, '$1 ')
}

export default formatCurrency
