import { useState } from "react";
import "../styles/Faq.css";

export default function Faq() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does CodeCanvas Innovations offer?",
      answer:
        "We specialize in UI/UX design, website development, and app development, creating seamless, custom digital solutions for businesses.",
    },
    {
      question: "What technologies do you use for website development?",
      answer:
        "Our team uses advanced technologies like React.js, Node.js, Express.js, MongoDB, Shopify, WordPress, PHP, and Next.js to build responsive, scalable websites.",
    },
    {
      question: "Which platforms do you develop mobile apps for?",
      answer: `We develop cross-platform mobile apps using React Native and Flutter, ensuring optimal performance on both iOS and Android.`,
    },
    {
      question: "How long does it take to complete a website or app project?",
      answer:
        "Project timelines vary depending on the complexity and scope. Generally, websites take 4-8 weeks, and apps may take 8-12 weeks. We’ll provide an estimate after discussing your project needs.",
    },
    {
      question: "Do you offer custom design services?",
      answer: `Yes, we offer tailored UI/UX design services to ensure your digital product aligns with your brand and provides an engaging user experience.`,
    },
    {
      question: "Will I be able to make updates to my website or app?",
      answer:
        "Absolutely! We offer user-friendly solutions and can provide guidance or support to help you manage your digital platform.",
    },
    {
      question: "What sets CodeCanvas Innovations apart from other digital agencies?",
      answer:
        "Our team combines cutting-edge technology, custom solutions, and a commitment to quality, ensuring every project meets your goals and exceeds expectations.",
    },
    {
      question: "How involved will I be in the design and development process?",
      answer: `We value your input and involve you in every phase, from initial design concepts to final deployment, ensuring the outcome aligns with your vision.`,
    },
    {
      question: "Do you provide support and maintenance after the project is completed?",
      answer:
        "Yes, we offer ongoing support and maintenance packages to ensure your website or app remains updated, secure, and optimized.",
    },
    {
      question: "How do I get started with CodeCanvas Innovations?",
      answer:
        "Contact us through our website or email to schedule a consultation. We’ll discuss your needs and create a tailored plan for your project.",
    },
    
  ];

  return (
    <div className="faqContainer">
      <div className="faqHeader">
        <h1>FAQ&apos;s</h1>
        <p>Need some answers?</p>
      </div>
      <div className="hs-accordion-group">
        {faqs.map((e, index) => (
          <div
            key={index}
            className={`hs-accordion ${
              openAccordion === index ? "active" : ""
            } bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700`}
            id={`hs-bordered-heading-${index}`}
          >
            <button
              className="hs-accordion-toggle text-xl hs-accordion-active:text-blue-600 inline-flex items-center gap-x-3 w-full font-semibold text-start text-black py-4 px-5 hover:text-[var(--theme-red)] disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400"
              aria-expanded={openAccordion === index}
              aria-controls={`hs-basic-bordered-collapse-${index}`}
              onClick={() => toggleAccordion(index)}
            >
              <svg
                className={`hs-accordion-active:hidden block size-3.5 ${
                  openAccordion === index ? "hidden" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              <svg
                className={`hs-accordion-active:block hidden size-3.5 ${
                  openAccordion === index ? "" : "hidden"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
              </svg>
              {e.question}
            </button>
            <div
              id={`hs-basic-bordered-collapse-${index}`}
              className={`hs-accordion-content ${
                openAccordion === index ? "block" : "hidden"
              } w-full overflow-hidden transition-[height] duration-300`}
              role="region"
              aria-labelledby={`hs-bordered-heading-${index}`}
            >
              <div className="pb-4 px-5">
                <p className="text-gray-800 dark:text-neutral-200 text-md">
                  {e.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
