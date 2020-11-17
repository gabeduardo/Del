const nodemailer = require('nodemailer')

console.log(process.env.EMAIL_USER)
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
  const info = await transporter.sendMail({
    from: "Slick's Slices <slick@example.com>",
    to: 'orders@example.com',
    subject: 'New order!',
    html: `<p>Your new pizza order is here!</p>`,
  })
  console.log(info)
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  }
}
