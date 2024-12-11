import { services } from "../utils/Constant";
import "../styles/Service.css";

export default function Service() {
  return (
    <div className="servicesContainer">
      <header>
        <h1>
          Our
          <br />
          Services
        </h1>
        <p>{services.ourServices}</p>
      </header>
      <main>
        {services.services.map((service, index) => (
          <section key={index} className="servicesBox">
            {index % 2 !== 0 ? (
              <div className="serviceContent">
                <div className="serviceImage serviceImage_left">
                  <img src={service.picture} alt={service.title} />
                </div>
                <div className="serviceText serviceText_right">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              </div>
            ) : (
              <div className="serviceContent">
                <div className="serviceText serviceText_left">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
                <div className="serviceImage serviceImage_right">
                  <img src={service.picture} alt={service.title} />
                </div>
              </div>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
