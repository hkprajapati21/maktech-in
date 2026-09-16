import { homeStats } from "@/assets/data/companyStats";

const Stats = () => {
  return (
    <div className="srex-stats srex-section">
      <div className="container">
        <div className="srex-stats__items ">
          <div className="row">
            {homeStats.map(({ key, icon, value, suffix, label }) => (
              <div key={key} className="col-md-6 col-lg-3 col-12">
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
