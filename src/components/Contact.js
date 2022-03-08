import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [surrname, setSurrname] = useState("");
  const [number, setNumber] = useState("");
  const [textArea, setTextArea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateSurrname = (e) => {
    setSurrname(e.target.value);
  };

  const updateNumber = (e) => {
    setNumber(e.target.value);
  };

  const updateTextArea = (e) => {
    setTextArea(e.target.value);
  };

  return (
    <div className="contact">
      <h2>Send me a message!</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label for="fname">Imię:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={name}
          onChange={updateName}
        />
        <label for="fsurrname">Nazwisko:</label>
        <input
          type="text"
          id="fsurrname"
          name="fsurrname"
          value={surrname}
          onChange={updateSurrname}
        />
        <label for="fnumber">Numer:</label>
        <input
          type="text"
          id="fnumber"
          name="fnumber"
          value={number}
          onChange={updateNumber}
        />
        <label for="ftext">Wpisz swoją wiadmość</label>
        <textarea id="ftext" value={textArea} onChange={updateTextArea} />
        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}

export default Contact;
