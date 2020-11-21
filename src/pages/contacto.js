import React from 'react'

import { GrInstagram } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'
import styled from 'styled-components'
import OrderStyles from '../styles/OrderStyles'

const RedesStyles = styled.div``
export default function Contacto() {
  return (
    <>
      <OrderStyles>
        <fieldset className="redes">
          <legend>Redes Sociales</legend>
          <p>
            Puedes contactarnos a través de nuestras redes sociales o rellenando
            el siguiente formulario
          </p>
          <span>
            +54534543534 <ImWhatsapp />
          </span>

          <span>
            MIcheesecakeDeli <GrInstagram />
          </span>
        </fieldset>
        <fieldset>
          <legend>Formulario de contacto:</legend>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Correo</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            required=""
            id="message"
            rows="5"
            className=""
          />
          <button type="submit">Enviar mensaje</button>
        </fieldset>
      </OrderStyles>
    </>
  )
}
