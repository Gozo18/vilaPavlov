import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "info@vilapavlov.cz", // Your email where you'll receive emails
      from: `${req.body.email}`, // your website email address here
      subject: `[vilaPavlov] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="cs">
      <head>
        <meta charset="utf-8">
      
        <title>vilaPavlov</title>
        <meta name="description" content="vilaPavlov - contact form">
        <meta name="author" content="vilaPavlov">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>Máte nový e-mail od ${req.body.fullname}</h3>
              <h3>E-mailová adresa je: ${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Zpráva:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">[vilaPavlov]</p>
              
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
