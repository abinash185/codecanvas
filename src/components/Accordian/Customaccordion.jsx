import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import collapseIcon from "../../assets/images/minus-svgrepo-com.svg";
import expandIcon from "../../assets/images/plus-large-svgrepo-com.svg";
import PropTypes from "prop-types";

export default function Customaccordion({ onAccordionChange }) {
  const [open, setOpen] = useState(0);
  function Icon({ isOpen }) {
    return isOpen ? (
      <img src={collapseIcon} alt="Collapse" />
    ) : (
      <img src={expandIcon} alt="Expand" />
    );
  }

  const handleOpen = (value) => {
    const newOpenValue = open === value ? 0 : value;
    setOpen(newOpenValue);
    console.log(newOpenValue, "oooo");
    onAccordionChange(newOpenValue);
  };

  return (
    <>
      <Accordion open={open === 1} icon={<Icon isOpen={open === 1} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="accordionHeader"
        >
          VISUAL & BRAND DESIGN
        </AccordionHeader>
        <AccordionBody>
          <p>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon isOpen={open === 2} />}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="accordionHeader"
        >
          WEBSITE DESIGN
        </AccordionHeader>
        <AccordionBody>
          <p>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon isOpen={open === 3} />}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="accordionHeader"
        >
          DIGITAL PRODUCTS
        </AccordionHeader>
        <AccordionBody>
          <p>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon isOpen={open === 4} />}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="accordionHeader"
        >
          CREATIVE DIRECTION
        </AccordionHeader>
        <AccordionBody>
          <p>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </p>
        </AccordionBody>
      </Accordion>
    </>
  );
}

Customaccordion.propTypes = {
  isOpen: PropTypes.bool,
  onAccordionChange: PropTypes.func,
};
