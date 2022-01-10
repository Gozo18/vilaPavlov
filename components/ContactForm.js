import { useState } from "react";
import styles from "../styles/ContactForm.module.scss";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Odeslat");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   const [form, setForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Odesílám");
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
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Odeslat");

        // Reset form fields
        setFullname("");
        setEmail("");
        setMessage("");
        setSubject("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Odeslat");
      // Reset form fields
      setFullname("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
    console.log(fullname, email, subject, message);
  };

  return (
    <div>
      <div className={styles.addressBox}>
        <p>Neváhejte nám napsat nebo zavolat.</p>
        <h3>vilaPavlov</h3>
        <p>Zahradní 287</p>
        <p>Pavlov, 692 01</p>
      </div>
      <div className={styles.contactsBox}>
        <div>Telefon:</div>
        <a href='tel:+420602172230'>+420 602 172 230</a>
      </div>
      <div className={styles.contactsBox}>
        <div>Telefon:</div>
        <a href='tel:+420723284232'>+420 723 284 232</a>
      </div>
      <div className={styles.contactsBox}>
        <div>E-mail:</div>
        <a href='mailto:jelinek82@gmail.com'>jelinek82@gmail.com</a>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <p>Pošlete nám Váš dotaz</p>

        <label htmlFor='fullname'>
          Jméno<span>*</span>
        </label>
        <input
          type='text'
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
          name='fullname'
        />
        {errors?.fullname && <p>Prosím, vyplňte!</p>}

        <label htmlFor='email'>
          E-mail<span>*</span>
        </label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors?.email && <p>Prosím, vyplňte!</p>}

        <label htmlFor='subject'>
          Předmět<span>*</span>
        </label>
        <input
          type='text'
          name='subject'
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        {errors?.subject && <p>Prosím, vyplňte!</p>}

        <label htmlFor='message'>
          Váš vzkaz<span>*</span>
        </label>
        <textarea
          name='message'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        {errors?.message && <p>Prosím, vyplňte!</p>}

        <button type='submit'>{buttonText}</button>

        <div className='text-left'>
          {showSuccessMessage && (
            <p className='text-green-500 font-semibold text-sm my-2'>
              Děkujeme! E-mail odeslán.
            </p>
          )}
          {showFailureMessage && (
            <p className='text-red-500'>Něco se pokazilo. Zkuste to znovu!</p>
          )}
        </div>
      </form>
    </div>
  );
}
