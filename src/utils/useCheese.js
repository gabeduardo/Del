import { useState, useContext } from 'react'
import OrderContext from '../components/OrderContext'
import attachNamesAndPrices from './attachNames'
import calculateOrderTotal from './calculateOrderTotal'
// import calculateOrderTotal from './calculateOrderTotal'
import formatMoney from './formatMoney'
// import attachNamesAndPrices from './attachNamesAndPrices'

export default function useCheese({ pizzas, values }) {
  // 1. Create some state to hold our order
  // We got rid of this line because we moved useState up to the provider
  // const [order, setOrder] = useState([]);
  // Now we access both our state and our updater function (setOrder) via context
  const [order, setOrder] = useContext(OrderContext)
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  // 2. Make a function add things to order
  function addToOrder(orderedPizza) {
    const originalArray = [...order, orderedPizza]

    const arrayHashmap = originalArray.reduce((obj, item) => {
      obj[item.id]
        ? (obj[item.id].price = obj[item.id].price + orderedPizza.price)
        : (obj[item.id] = { ...item })
      return obj
    }, {})

    const mergedArray = Object.values(arrayHashmap)
    // console.log(mergedArray)
    const nuevaTorta = mergedArray.find(torta => torta.id === orderedPizza.id)
    // console.log(nuevaTorta)

    // console.log(orderedPizza)
    // console.log(order)

    setOrder([...mergedArray])
    // console.log(order)
  }
  // 3. Make a function remove things from order
  function removeFromOrder(index) {
    setOrder([
      // everything before the item we want to remove
      ...order.slice(0, index),
      // everything after the item we want to remove
      ...order.slice(index + 1),
    ])
  }

  // this is the function that is run when someone submits the form
  async function submitOrder(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    // setMessage('Go eat!');

    // gather all the data
    const body = {
      order: attachNamesAndPrices(order, pizzas),
      values,
      total: formatMoney(calculateOrderTotal(order)),
      name: values.name,
      email: values.email,
    }

    // console.log(process.env.GATSBY_SERVERLESS_BASE)
    // // 4. Send this data the a serevrless function when they check out
    const res = await fetch(
      `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    )
    const text = JSON.parse(await res.text())

    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false) // turn off loading
      setError(text.message)
    } else {
      // it worked!
      setLoading(false)
      setMessage('Success! Come on down for your pizza')
    }
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  }
}
