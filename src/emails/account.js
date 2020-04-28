const sgMail = require("@sendgrid/mail");
const sendgridAPIKey = process.env.SENDGRID_API_KEY; //Enter and Use Your SENDGRID API KEY

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "hello@gmail.com",
      subject: "Thanks for joining in!",
      text: `Welcome ${name}, let me know how you get along with this application.`,
    })
    .then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
};

const sendCancellationEmail = (email, name) => {
  sgMail
    .send({
      to: email,
      from: "hello@gmail.com",
      subject: "Sorry to see you go",
      text: `Goodbye, ${name}, I hope to see you back sometime soon.`,
    })
    .then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
