const sgMail = require("@sendgrid/mail");
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);
const msg = {
  to: "157kuchi@gmail.com",
  from: "157kuchi@gmail.com",
  subject: "Testing my sendgrid",
  text: "hey its working right",
};
sgMail.send(msg).then(
  () => {},
  (error) => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
);
