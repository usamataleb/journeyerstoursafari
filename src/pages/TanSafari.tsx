import TourList from "../components/TourList";
import UpperSection from "../components/UpperSection";

function TanSafari() {
  return (
    <>
      <UpperSection name={"Tanzania Safaris"} />
      <section className="package-section">
        <div className="container">
          <div className="section-heading text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h5 className="dash-style">Tanzania Safaris</h5>
                <p>
                  Mollit voluptatem perspiciatis convallis elementum corporis
                  quo veritatis aliquid blandit, blandit torquent, odit placeat.
                  Adipiscing repudiandae eius cursus? Nostrum magnis maxime
                  curae placeat.
                </p>
              </div>
            </div>
          </div>
          <div className="package-inner">
            <div className="row">
              <TourList limit={100} shortDesc={true} category="tz"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TanSafari;