import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }
  try {
    const { name, email, subject, message } = req.body

    const data = await resend.emails.send({
      from: "info@vilapavlov.cz",
      to: ["info@vilapavlov.cz"],
      subject: `[vilaPavlov] : ${subject}`,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
              <h3>Máte nový e-mail od ${name}</h3>
              <h3>E-mailová adresa je: ${email} </h3>
              <div style="font-size: 16px;">
              <p>Zpráva:</p>
              <p>${message}</p>
              <br>
              </div>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">[vilaPavlov]</p>
              
              </div>
      </body>
      </html>`,
    })

    return res.status(200).json({ success: true, data })
  } catch (error) {
    console.error("Resend API error:", error)
    return res.status(500).json({ success: false, error: error.message })
  }
}
