const formatter = Intl.NumberFormat('es-MX', {
  style: 'currency',
  currency: 'MXN',
})

export default function formatMoney(value) {
  return formatter.format(value)
}
