import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaCalendarCheck, FaPaperPlane } from 'react-icons/fa';
import bg from './assets/back2.png'

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  z-index: -1;
`;






const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(17, 17, 17, 0.8); /* Transparent dark background */
  padding: 30px;
  border-radius: 20px 20px 0 0;
  width: 95%;
  max-width: 900px;
  color: white;
  box-shadow: 0 -5px 30px rgba(0,0,0,0.6);
  z-index: 1000;
  backdrop-filter: blur(10px); /* Optional: soft blur behind */
`;

const IconRow = styled.div`
  text-align: center;
  font-size: 22px;
  margin-bottom: 20px;

  a {
    margin: 0 12px;
    color: #ccc;
    transition: color 0.3s;

    &:hover {
      color: #fff;
    }
  }
`;

const ToggleButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  gap: 12px;

  button {
    background: #222;
    color: #ccc;
    border: none;
    padding: 10px 18px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s ease;
    &.active {
      background: #333;
      color: #fff;
    }
  }
`;

const CardsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.a`
  background: linear-gradient(145deg, #1a1a1a, #111);
  border-radius: 12px;
  padding: 20px;
  flex: 1 1 45%;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid #333;
  text-decoration: none;

  .icon {
    font-size: 36px;
    padding: 10px;
    border-radius: 12px;
    background-color: rgba(255, 255, 255, 0.05);
  }

  &.meeting .icon {
    color: #c084fc;
  }

  &.email .icon {
    color: #4ea8de;
  }

  .text {
    display: flex;
    flex-direction: column;

    h3 {
      margin: 0 0 6px;
      font-size: 18px;
      color: #fff;
    }

    p {
      font-size: 13px;
      color: #aaa;
      margin-top: 4px;
    }
  }

  &:hover {
    background: #222;
  }
`;

const FormCard = styled.form`
  background: linear-gradient(145deg, #1a1a1a, #111);
  border: 1px solid #333;
  border-radius: 12px;
  padding: 25px;
  width: 100%;
  max-width: 700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Row = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const InputWrapper = styled.div`
  flex: 1;

  label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
    color: #ccc;
  }

  input {
    width: 90%;
    background: #1f1f1f;
    color: white;
    border: 1px solid #333;
    padding: 12px;
    border-radius: 10px;
    font-size: 14px;

    &::placeholder {
      color: #777;
    }
  }
`;

const TextareaWrapper = styled.div`
  width: 95%;

  label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 6px;
    color: #ccc;
  }

  textarea {
    width: 100%;
    background: #1f1f1f;
    color: white;
    border: 1px solid #333;
    padding: 14px;
    border-radius: 10px;
    font-size: 14px;
    resize: none;
    min-height: 120px;

    &::placeholder {
      color: #777;
    }
  }

  .char-count {
    font-size: 12px;
    color: #777;
    text-align: right;
    margin-top: 4px;
  }
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  background: linear-gradient(90deg, #3a47d5, #00c6ff);
  color: white;
  border: none;
  padding: 14px;
  font-weight: 600;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    opacity: 0.9;
  }

  svg {
    font-size: 16px;
  }
`;

const Contact = () => {
  const [activeTab, setActiveTab] = useState("form");
  const [message, setMessage] = useState("");
  const phone = "919677987432";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const text = `Hello, I'm ${name}. My email is ${email}. Message: ${message}`;
    const encodedText = encodeURIComponent(text);
    const url = `https://wa.me/${phone}?text=${encodedText}`;
    window.open(url, "_blank");
  };

  return (
    <BackgroundWrapper >
      <Container id="contact">
        <IconRow>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/your-github-username" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/your-instagram-username" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </IconRow>

        <ToggleButtons>
          <button className={activeTab === "quick" ? "active" : ""} onClick={() => setActiveTab("quick")}>Quick connect</button>
          <button className={activeTab === "form" ? "active" : ""} onClick={() => setActiveTab("form")}>Fill a form</button>
        </ToggleButtons>

        {activeTab === "quick" ? (
          <CardsRow>
            <Card className="email" href="https://mail.google.com/mail/?view=cm&fs=1&to=javithjavi148@gmail.com" target="_blank" rel="noreferrer">
              <div className="icon"><FaEnvelope /></div>
              <div className="text">
                <h3>Email</h3>
                <p>Open Gmail to send a message</p>
              </div>
            </Card>
            <Card className="meeting" href="https://calendar.google.com/calendar/u/0/r/eventedit" target="_blank" rel="noreferrer">
              <div className="icon"><FaCalendarCheck /></div>
              <div className="text">
                <h3>Schedule Meeting</h3>
                <p>Create a meeting in Google Calendar</p>
              </div>
            </Card>
          </CardsRow>
        ) : (
          <FormCard onSubmit={handleFormSubmit}>
            <Row>
              <InputWrapper>
                <label>Name</label>
                <input type="text" name="name" placeholder="Your name" required />
              </InputWrapper>
              <InputWrapper>
                <label>Email</label>
                <input type="email" name="email" placeholder="your.email@example.com" required />
              </InputWrapper>
            </Row>
            <TextareaWrapper>
              <label>Message</label>
              <textarea
                name="message"
                placeholder="What would you like to discuss?"
                maxLength={1000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <div className="char-count">{message.length}/1000</div>
            </TextareaWrapper>
            <SubmitButton type="submit">
              <FaPaperPlane /> Send message
            </SubmitButton>
          </FormCard>
        )}
      </Container>
    </BackgroundWrapper>
  );
};

export default Contact;
