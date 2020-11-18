import formatMoney from './formatMoney'

export default function attachNamesAndPrices(order, cheesecakes) {
  return order.map(item => {
    const cake = cheesecakes.find(cheesecake => cheesecake.id === item.id)
    return {
      ...item,
      name: cake.name,
      thumbnail: cake.image.asset.fluid.src,
      price: formatMoney(cake.price),
    }
  })
}
