import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import useForm from '../utils/useForm'
import useCheese from '../utils/useCheese'
// import calculatePizzaPrice from '../utils/calcuatePizzaPrice'
import formatMoney from '../utils/formatMoney'
import OrderStyles from '../styles/OrderStyles'
import MenuItemStyles from '../styles/MenuItemStyles'
import OrderComponent from '../components/OrderComponent'
import calculateOrderTotal from '../utils/calculateOrderTotal'

// import PizzaOrder from '../components/PizzaOrder'
// import calculateOrderTotal from '../utils/calculateOrderTotal'

export default function OrderPage({ data }) {
  const cheesecakes = data.cheesecakes.nodes
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    telefono: '',
  })
  const { order, addToOrder, removeFromOrder } = useCheese(cheesecakes)

  return (
    <>
      <OrderStyles>
        <fieldset>
          <legend>Datos:</legend>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            value={values.name}
            onChange={updateValue}
          />
          <label htmlFor="email">Correo</label>
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={updateValue}
          />

          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            name="telefono"
            id="telefono"
            value={values.telefono}
            onChange={updateValue}
          />
        </fieldset>

        <fieldset className="menu">
          <legend>Menú</legend>
          {cheesecakes.map(cake => (
            <MenuItemStyles key={cake.id}>
              <Img fluid={cake.image.asset.fluid} />
              <div>
                <h2>{cake.name}</h2>
              </div>
              <div>
                <button
                  type="button"
                  key={cake.id}
                  onClick={() => addToOrder(cake)}
                >
                  {formatMoney(cake.price)}
                </button>
              </div>
            </MenuItemStyles>
          ))}
        </fieldset>

        <fieldset className="order">
          <legend>Orden:</legend>
          <OrderComponent
            order={order}
            removeFromOrder={removeFromOrder}
            cake={cheesecakes}
          />
        </fieldset>
        <fieldset>
          <h3>
            {' '}
            El monto total de tu orden es:{' '}
            {formatMoney(calculateOrderTotal(order, cheesecakes))}
          </h3>
        </fieldset>
      </OrderStyles>
    </>
  )
}

export const query = graphql`
  query {
    cheesecakes: allSanityCheesecake {
      nodes {
        name
        id
        slug {
          current
        }
        price
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
