const faqs = [
  {
    id: "collapseOne",
    number: "01",
    question: "How does the free site survey work?",
    answer: "Our expert visits your location, analyzes your roof, sunlight hours, and electricity bill to design the right solar system for you.",
    expanded: true,
  },
  {
    id: "collapseTwo",
    number: "02",
    question: "Do you handle net metering and subsidy paperwork?",
    answer: "Yes. We handle all permits, net metering applications, and government subsidy paperwork — including PM Surya Ghar Scheme assistance.",
  },
  {
    id: "collapseThree",
    number: "03",
    question: "What financing options are available?",
    answer: "We help you access solar loans, government-backed financing schemes, and easy EMI options through leading banks and NBFCs with little to no upfront investment.",
  },
  {
    id: "collapseFour",
    number: "04",
    question: "Do you provide post-installation support?",
    answer: "Absolutely. Our O&M and AMC teams provide scheduled maintenance, real-time monitoring, fault detection, and dedicated support for 25 years.",
  },
  {
    id: "collapseFive",
    number: "05",
    question: "Are you MNRE approved and GeM registered?",
    answer: "Yes. We are an MNRE Approved Solar Vendor and a Government e-Marketplace (GeM) registered supplier for residential, commercial, and government projects.",
  },
];

const Question = () => {
  return (
    <section className="srex-question srex-section">
      <div className="container">
        <div className="srex-question__title">
          <div className="srex-section__head ">
            <h5 className="srex-section__head__badge">Common Questions</h5>
            <h2 className="srex-section__head__title">Everything You Need to Know About Going Solar</h2>
            <p className="mb-5 mt-3">Get answers to the most frequently asked questions about solar installation, financing, and maintenance with Mektech.in.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="srex-question__left">
              <img src="/images/question/question.png" alt="Question_img" />
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="srex-question__right ">
              <div className="srex-accordion accordion" id="faq">
                {faqs.map(({ id, number, question, answer, expanded }) => (
                  <div key={id} className="accordion-item">
                    <div className="accordion-header">
                      <div
                        className={`accordion-button ${expanded ? "" : "collapsed"}`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#${id}`}
                        aria-expanded={expanded ? "true" : "false"}
                        aria-controls={id}
                        role="button"
                      >
                        <div className="accordion-header__left">
                          <p className="accordion-header__left__badge">{number}</p>
                          <h3>{question}</h3>
                        </div>
                        <i className="fa-solid fa-angle-down open"></i>
                        <i className="fa-solid fa-angle-up close"></i>
                      </div>
                    </div>
                    <div id={id} className={`accordion-collapse collapse ${expanded ? "show" : ""}`} data-bs-parent="#faq">
                      <div className="accordion-body">{answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Question;
