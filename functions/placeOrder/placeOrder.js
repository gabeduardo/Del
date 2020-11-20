const nodemailer = require('nodemailer')

function generateOrderEmail({ order, total }) {
  return `<div>
    <h2>CheesecakeDeli</h2>
    <p>Gracias por realizar tu pedido, un miembro de nuestro equipo se pondrá pronto en contacto contigo.</p>
    <ul>
      ${order
        .map(
          item => `<li>
        <img src="${item.thumbnail}" alt="${item.name}"/>
        ${item.size} ${item.name} - ${item.price}
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

// create a transport for nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

exports.handler = async (event, context) => {
  // Test send an email
  // const info = await transporter.sendMail({
  //   from: "Slick's Slices <slick@example.com>",
  //   to: 'gemcirelli@gmail.com',
  //   subject: 'New order!',
  //   html: `<p>Your new pizza order is here!</p>`,
  // })
  // console.log(info)
  const body = JSON.parse(event.body)
  console.log(body)
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

  // send the email
  const info = await transporter.sendMail({
    from: "Slick's Slices <slick@example.com>",
    to: `${body.name} <${body.email}>, orders@example.com`,
    subject: 'Pedido CheesecakeDeli',
    html: generateOrderEmail({ order: body.order, total: body.total }),
  })
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  }
}
