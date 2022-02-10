const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.sendToOwner = functions.https.onRequest(async (request, response) => {
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "GET, PUT, POST, OPTIONS");
  response.set("Access-Control-Allow-Headers", "*");
  try {
    let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
      </head>
      <body>`;
    html = `${html}<span>Hey  ${request.body.account} just logged in on your <strong>MiningRIGNFT<strong> Site</span> </body></html>`;
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "mustafabutt312@gmail.com", // generated ethereal user
        pass: "znoevvaqubjmoazv", // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    var mailOptions = {
      from: "mustafabutt312@gmail.com", // sender address
      to: request.body.email, // list of receivers
      subject: "MiningRigNFTS", // Subject line
      html,
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        response.json(err);
      } else {
        return response.json({
          success: true,
          status: info.response,
          message: mailOptions,
        });
      }
    });
  } catch (err) {
    response.json({ success: false, error: err.message });
  }
});
