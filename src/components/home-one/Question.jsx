import { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    id: "faq-1",
    number: "01",
    question: "How does the free site survey work?",
    answer: "Our expert visits your location, analyzes your roof, sunlight hours, and electricity bill to design the right solar system for you.",
  },
  {
    id: "faq-2",
    number: "02",
    question: "Do you handle net metering and subsidy paperwork?",
    answer: "Yes. We handle all permits, net metering applications, and government subsidy paperwork - including PM Surya Ghar Scheme assistance.",
  },
  {
    id: "faq-3",
    number: "03",
    question: "What financing options are available?",
    answer: "We help you access solar loans, government-backed financing schemes, and easy EMI options through leading banks and NBFCs with little to no upfront investment.",
  },
  {
    id: "faq-4",
    number: "04",
    question: "How long does installation take?",
    answer: "Most residential systems are installed quickly after design and approvals. Commercial timelines depend on plant size, but our certified team installs neatly, safely, and on schedule.",
  },
  {
    id: "faq-5",
    number: "05",
    question: "Do you provide post-installation support?",
    answer: "Absolutely. Our O&M and AMC teams provide scheduled maintenance, real-time monitoring, fault detection, and dedicated support for 25 years.",
  },
  {
    id: "faq-6",
    number: "06",
    question: "Are you MNRE approved and GeM registered?",
    answer: "Yes. We are an MNRE Approved Solar Vendor and a Government e-Marketplace (GeM) registered supplier for residential, commercial, and government projects.",
  },
];

const FaqCard = ({ item, isOpen, onToggle }) => (
  <div className={`srex-faq-card ${isOpen ? "is-open" : ""}`}>
    <button type="button" className="srex-faq-card__header" onClick={onToggle} aria-expanded={isOpen}>
      <span className="srex-faq-card__number">{item.number}</span>
      <h3 className="srex-faq-card__question">{item.question}</h3>
      <i className={`fa-solid ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}></i>
    </button>
    {isOpen && <p className="srex-faq-card__answer">{item.answer}</p>}
  </div>
);

const Question = () => {
  const [openId, setOpenId] = useState(faqs[0]?.id || null);
  const mid = Math.ceil(faqs.length / 2);
  const leftFaqs = faqs.slice(0, mid);
  const rightFaqs = faqs.slice(mid);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="srex-question srex-section" id="faqs">
      <div className="container">
        <div className="srex-question__title">
          <div className="srex-section__head">
            <h5 className="srex-section__head__badge">
              <img src="/images/badge-icon.svg" alt="" />
              Common Questions
            </h5>
            <h2 className="srex-section__head__title">Everything You Need to Know About Going Solar</h2>
            <p className="srex-question__desc">
              Clear answers on surveys, financing, installation, and support - so you can switch to solar with confidence.
            </p>
          </div>
        </div>

        <div className="srex-question__scroll">
          <div className="row g-3">
            <div className="col-12 col-lg-6">
              <div className="srex-question__column">
                {leftFaqs.map((item) => (
                  <FaqCard key={item.id} item={item} isOpen={openId === item.id} onToggle={() => toggleFaq(item.id)} />
                ))}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="srex-question__column">
                {rightFaqs.map((item) => (
                  <FaqCard key={item.id} item={item} isOpen={openId === item.id} onToggle={() => toggleFaq(item.id)} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="srex-question__cta text-center">
          <p>Still have a question?</p>
          <Link to="/contact" className="srex-btn srex-btn--primary">
            Ask Our Team <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Question;
