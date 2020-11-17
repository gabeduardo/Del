export default function calculateOrderTotal(order, cheesecakes) {
  return order.reduce(
    (runningTotal, singleOrder) =>
      // const torta = cheesecakes.find(item => item.id === singleOrder.id)
      runningTotal + singleOrder.price,
    0
  )
}
