import { useState } from "react"
import styles from "../styles/ContactForm.module.scss"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const form = e.target
    const formData = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    const result = await res.json()
    setLoading(false)

    if (result.success) {
      setStatus("Zpráva byla úspěšně odeslána ✅")
      form.reset()
    } else {
      setStatus("Nastala chyba při odesílání ❌")
    }
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
            <input type="text" name="fullname" required />
          </label>
        </div>

        <div className={styles.formLine}>
          <label>
            E-mail<span>*</span>
            <input type="email" name="email" required />
          </label>
        </div>

        <div className={styles.formLine}>
          <label>
            Předmět<span>*</span>
            <input type="text" name="subject" required />
          </label>
        </div>

        <div className={styles.formLine}>
          <label>
            Váš vzkaz<span>*</span>
            <textarea name="message" required></textarea>
          </label>
        </div>

        <button type="submit" style={{ cursor: "pointer" }} disabled={loading}>
          {loading ? "Odesílám..." : "Odeslat"}
        </button>

        {status && <p className="text-sm">{status}</p>}
      </form>
    </div>
  )
}
