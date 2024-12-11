import { brands } from "../utils/Constant";
import "../styles/Clients.css";

export default function Clients() {
  return (
    <>
      <div className="clientsContainer">
        <header>
          <h1>Our Clients </h1>
        </header>
        <section>
          {brands.map((e, index) => (
            <img
              src={e.brandImage}
              alt=""
              key={index}
              className=" object-contain"
              width="150px"
              height="150px"
            />
          ))}
        </section>
      </div>
    </>
  );
}
