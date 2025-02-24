import { useState } from "react"
import styles from "../styles/ContactForm.module.scss"

export default function ContactForm() {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  //   Form validation
  const [errors, setErrors] = useState({})

  //   Setting button text
  const [buttonText, setButtonText] = useState("Odeslat")

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (fullname.length <= 0 || fullname == undefined) {
      tempErrors["fullname"] = true
      isValid = false
    }
    if (email.length <= 0 || email == undefined) {
      tempErrors["email"] = true
      isValid = false
    }
    if (subject.length <= 0 || subject == undefined) {
      tempErrors["subject"] = true
      isValid = false
    }
    if (message.length <= 0 || message == undefined) {
      tempErrors["message"] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log("errors", errors)
    return isValid
  }

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValidForm = handleValidation()

    if (isValidForm) {
      setButtonText("Odesílám")
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })

      const { error } = await res.json()
      if (error) {
        /* console.log(error); */
        setShowSuccessMessage(false)
        setShowFailureMessage(true)
        setButtonText("Odeslat")

        // Reset form fields
        setFullname("")
        setEmail("")
        setMessage("")
        setSubject("")
        return
      }
      setShowSuccessMessage(true)
      setShowFailureMessage(false)
      setButtonText("Odeslat")
      // Reset form fields
      setFullname("")
      setEmail("")
      setMessage("")
      setSubject("")
    }
    /* console.log(fullname, email, subject, message); */
  }

  return (
    <div>
      <div className={styles.addressBox}>
        <p>Neváhejte nám napsat nebo zavolat.</p>
        <h3 className={styles.addressHeader}>vilaPavlov</h3>
        <p>Zahradní 287</p>
        <p>Pavlov, 692 01</p>
      </div>
      <div className={styles.contactsBox}>
        <div>Telefon:</div>
        <a href="tel:+420602172230">+420 602 172 230</a>
      </div>
      <div className={styles.contactsBox}>
        <div>Telefon:</div>
        <a href="tel:+420723284232">+420 723 284 232</a>
      </div>
      <div className={styles.contactsBox}>
        <div>E-mail:</div>
        <a href="mailto:info@vilapavlov.cz">info@vilapavlov.cz</a>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <p>Pošlete nám Váš dotaz</p>

        <div className={styles.formLine}>
          <label>
            Jméno<span>*</span>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value)
              }}
              name="fullname"
            />
          </label>
          {errors?.fullname && (
            <div className={styles.emptyError}>Prosím, vyplňte!</div>
          )}
        </div>

        <div className={styles.formLine}>
          <label>
            E-mail<span>*</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </label>
          {errors?.email && (
            <div className={styles.emptyError}>Prosím, vyplňte!</div>
          )}
        </div>

        <div className={styles.formLine}>
          <label>
            Předmět<span>*</span>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value)
              }}
            />
          </label>
          {errors?.subject && (
            <div className={styles.emptyError}>Prosím, vyplňte!</div>
          )}
        </div>

        <div className={styles.formLine}>
          <label>
            Váš vzkaz<span>*</span>
            <textarea
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
            ></textarea>
          </label>
          {errors?.message && (
            <div className={styles.emptyError}>Prosím, vyplňte!</div>
          )}
        </div>

        <button type="submit" style={{ cursor: "pointer" }}>
          {buttonText}
        </button>

        <div className="text-left">
          {showSuccessMessage && (
            <div className={styles.sendingSuccess}>
              Děkujeme, e-mail byl odeslán.
            </div>
          )}
          {showFailureMessage && (
            <div className={styles.sendingError}>
              Něco se pokazilo. Zkuste to znovu!
            </div>
          )}
        </div>
      </form>
    </div>
  )
}
