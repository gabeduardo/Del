export default function calculateOrderTotal(order, cheesecakes) {
  return order.reduce((runningTotal, singleOrder) => {
    const torta = cheesecakes.find(item => item.id === singleOrder.id)
    return runningTotal + torta.price
  }, 0)
}
