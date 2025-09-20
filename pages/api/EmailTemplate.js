export function EmailTemplate(fullname, email, message) {
  return (
    <body>
      <div
        className="img-container"
        style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"
      ></div>
      <div className="container" style="margin-left: 20px;margin-right: 20px;">
        <h3>Máte nový e-mail od ${req.body.fullname}</h3>
        <h3>E-mailová adresa je: ${req.body.email} </h3>
        <div style="font-size: 16px;">
          <p>Zpráva:</p>
          <p>${req.body.message}</p>
          <br />
        </div>
        <p
          className="footer"
          style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;"
        >
          [vilaPavlov]
        </p>
      </div>
    </body>
  )
}
