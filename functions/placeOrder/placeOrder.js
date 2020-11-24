const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

function generateOrderEmail({ order, total }) {
  return `<div>
    <h2>CheesecakeDeli</h2>
    <p>Gracias por realizar tu pedido, un miembro de nuestro equipo se pondrá pronto en contacto contigo.</p>
    <ul>
      ${order
        .map(
          item => `<li>
        <img src="${item.thumbnail}" alt="${item.name}"/>
         ${item.name} - ${item.price}
      </li>`
        )
        .join('')}
    </ul>
    <p>El monto total de tu pedido es  <strong>$${total}</strong> </p>
    <style>
        ul {
          list-style: none;
        }
    </style>
  </div>`
}

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body)

  // Validate the data coming in is correct
  const requiredFields = ['email', 'name', 'order']

  for (const field of requiredFields) {
    console.log(`Checking that ${field} is good`)
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Vaya, al parecer te faltó rellenar el campo: ${field} field`,
        }),
      }
    }
  }

  // make sure they actually have items in that order
  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Selecciona Productos para realizar tu pedido`,
      }),
    }
  }

  const msg = {
    to: [`${body.email}`, 'micheesecakedeli@gmail.com'],
    from: 'info@cheesecakedeli.com', // Use the email address or domain you verified above
    subject: 'Pedido Cheesecake Deli',
    text: 'pedido desde cheesecakedeli',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  }

  const msgPedido = {
    to: 'micheesecakedeli@gmail.com',
    from: 'info@cheesecakedeli.com',
    subject: `pedido recibido de ${body.email}`,
    text: 'informacion sobre el pedido',
    html: `<h3>la direccion y observaciones son: </h3>${body.description} <br>El teléfono del cliente es:  ${body.telefono} `,
  }

  sgMail.send(msgPedido).then(
    () => {},
    error => {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }
    }
  )
  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    }
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Se produjo un error al procesar tu orden`,
      }),
    }
  }
}
