import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contactContainer">
        <section>
          <h1>Let&apos;s build an awesome project together!</h1>
          <form className="form">
            <div className="group">
              <input required="true" className="main-input" type="text" />
              <span className="highlight-span"></span>
              <label className="lebal-fullName">Full Name</label>
            </div>
            <div className="group-row">
              <div className="group">
                <input required="true" className="main-input" type="email" />
                <span className="highlight-span"></span>
                <label className="lebal-email">Email</label>
              </div>
              <div className="group">
                <input required="true" className="main-input" type="tel" />
                <span className="highlight-span"></span>
                <label className="lebal-phoneNumber">Phone</label>
              </div>
            </div>
            <div className="container-1">
              <div className="group">
                <textarea
                  required="true"
                  className="main-input message-input"
                ></textarea>
                <span className="highlight-span"></span>
                <label className="lebal-message">Message</label>
              </div>
            </div>
            <button className="submit">Submit</button>
          </form>
        </section>
        <section>
          <div className="h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.14261945565318!2d77.43163219313642!3d23.232826317460727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c435f42d6a5bb%3A0xda91f89fbf094cbf!2sNexus%20Co-Working!5e0!3m2!1sen!2sin!4v1721366221497!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}
