const Stats = () => {
  const stats = [
    { icon: "/images/home-one/stats/projects.svg", value: "500", suffix: "+", label: "Projects Completed" },
    { icon: "/images/home-one/stats/awards.svg", value: "50", suffix: " MW+", label: "Installed Capacity" },
    { icon: "/images/home-one/stats/clients.svg", value: "1000", suffix: "+", label: "Happy Clients" },
    { icon: "/images/home-one/stats/members.svg", value: "25", suffix: "-Year", label: "Performance Warranty" },
  ];

  return (
    <div className="srex-stats srex-section">
      <div className="container">
        <div className="srex-stats__items ">
          <div className="row">
            {stats.map(({ icon, value, suffix, label }) => (
              <div key={label} className="col-md-6 col-lg-3 col-12">
                <div className="srex-stats__item">
                  <div className="srex-stats__item__icon">
                    <img src={icon} alt={label} />
                  </div>
                  <div className="srex-stats__item__text">
                    <h2>
                      <span className="counter">{value}</span>
                      {suffix}
                    </h2>
                    <h3>{label}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
