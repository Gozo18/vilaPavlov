import { EmailTemplate } from "./EmailTemplate"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

async function sendEmail(req, res) {
  try {
    await resend.emails.send({
      to: ["info@vilapavlov.cz"],
      from: "info@vilapavlov.cz",
      subject: `[vilaPavlov] : ${req.body.subject}`,
      react: EmailTemplate(req.body.fullname, req.body.email, req.body.message),
    })
  } catch (error) {
    /* console.log(error); */
    return res.status(400).json(error)
  }

  return res.status(200).json(data)
}

export default sendEmail
