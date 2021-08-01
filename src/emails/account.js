const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'orbenda1905@gmail.com',
        subject: 'Thanks for joining in',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancellationMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'orbenda1905@gmail.com',
        subject: 'Cancellation approval',
        text: `Sorry for leaving us ${name}. We'd like to know why you decided to cancel you membership`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancellationMail
}