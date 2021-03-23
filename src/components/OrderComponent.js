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
            <Img fluid={singleOrder.image.asset.fluid} />
            <h2>
              <span>{singleOrder.price / cheesecake.price} </span>
              {singleOrder.name}
            </h2>

            <p>
              {formatMoney(singleOrder.price)}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.name} from Order`}
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
