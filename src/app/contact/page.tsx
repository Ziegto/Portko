"use client";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const sendEmail = (e:any) => {
    e.preventDefault();
    // setWait(true)
    emailjs.sendForm('service_l2ii0tv', 'template_8rjr0nn', e.target
        , 'user_LyLSi9Trqil1bzm13xMi8')
        .then(() => {
          // setStatus(1)
          // setText("Úspěšně odesláno")
          // setWait(false)
          // setTimeout(() => setStatus(0), 3000)
          // setTimeout(() => setStatus(-1), 6000)
          e.target.reset()
        }, (error) => {
          // setStatus(2)
          // setText("Něco se pokazilo. Zkuste to prosím později.")
          // setWait(false)
          // setTimeout(() => setStatus(0), 3000)
          // setTimeout(() => setStatus(-1), 6000)
        });

  };

  return (
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Kontakt</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Adresa</h4>
              <p>Jateční 7a, Opava</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Telefon</h4>
              <p>+420 603 765 731</p>
            </div>
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>tomas.ziegler@outlook.com</p>
            </div>
          </div>
          <div className="row">
            <form className="contact-form padd-15" onSubmit={sendEmail}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Jméno přijmení*"
                        name="name"
                        required
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                        name="email"
                        required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                  <textarea
                      className="form-control"
                      placeholder="Zpráva*"
                      defaultValue=""
                      name="message"
                      required
                  />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button type="submit" className="btn">
                    Odeslat zprávu
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
  );
};

export default Contact;
