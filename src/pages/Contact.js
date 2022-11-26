import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [message, setMessage] = useState([]);
  const submit = (e) => {
    e.preventDefault();

    setMessage(<div>Thank you for your submission!</div>);
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.comment.value = '';
  };

  return (
    <div className="contact-content">
      <form className="form" onSubmit={submit}>
        <h1>Contact Form</h1>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input className="input" id="name" required></input>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input className="input" type="email" id="email" required></input>
        </div>
        <div className="form-group">
          <label className="label" htmlFor="comment">
            Comment:
          </label>
          <textarea className="textarea" id="comment"></textarea>
        </div>
        <div className="contact-buttons">
          <button className="contact-btn submit" type="submit">
            Submit
          </button>
        </div>
        <div className="message">{message}</div>
      </form>
    </div>
  );
};

export default Contact;
