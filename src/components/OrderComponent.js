import React from 'react'
import Img from 'gatsby-image'
import MenuItemStyles from '../styles/MenuItemStyles'

import formatMoney from '../utils/formatMoney'

export default function OrderComponent({ order, cake, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const cheesecake = cake.find(torta => torta.id === singleOrder.id)
        return (
          <MenuItemStyles key={`${singleOrder.id}-${index}`}>
            <Img fluid={cheesecake.image.asset.fluid} />
            <h2>{cheesecake.name}</h2>
            <p>
              {formatMoney(cheesecake.price)}
              <button
                type="button"
                className="remove"
                title={`Remove ${cheesecake.name} from Order`}
                onClick={() => removeFromOrder(index)}
              >
                &times;
              </button>
            </p>
          </MenuItemStyles>
        )
      })}
    </>
  )
}
