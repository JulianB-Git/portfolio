import "./skills.scss";
import "boxicons";
import { skillsFrontend } from "../../data";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Skills = () => {
  const theme = useContext(ThemeContext);

  const badgeColor = theme.state.darkMode ? "#ffffff" : undefined;

  return (
    <section className="skills ">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container">
        {/* Frontend */}
        <div
          className="skills__content"
          style={{
            boxShadow: theme.state.darkMode
              ? "0px 0px 15px 10px rgba(19, 19, 19, 0.64)"
              : "0px 0px 15px 10px rgba(209,209,209,0.64)",
          }}
        >
          <h3 className="skills__title">Frontend Developer</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__level">Good</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__level">Good</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Javascript</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">React</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  <span className="skills__level">Good</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Git</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div
          className="skills__content"
          style={{
            boxShadow: theme.state.darkMode
              ? "0px 0px 18px 12px rgba(19, 19, 19, 0.64)"
              : "0px 0px 18px 12px rgba(209,209,209,0.64)",
          }}
        >
          <h3 className="skills__title">Backend Developer</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Java</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Node JS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">MySQL</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Docker</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Spring Boot</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation */}
        <div
          className="skills__content"
          style={{
            boxShadow: theme.state.darkMode
              ? "0px 0px 18px 12px rgba(19, 19, 19, 0.64)"
              : "0px 0px 18px 12px rgba(209,209,209,0.64)",
          }}
        >
          <h3 className="skills__title">QA Automation</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Selenium</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Espresso</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Appium</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">API Testing</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">UI Testing</h3>
                  <span className="skills__level">Advanced</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">NeoLoad</h3>
                  <span className="skills__level">Good</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud */}
        <div
          className="skills__content"
          style={{
            boxShadow: theme.state.darkMode
              ? "0px 0px 18px 12px rgba(19, 19, 19, 0.64)"
              : "0px 0px 18px 12px rgba(209,209,209,0.64)",
          }}
        >
          <h3 className="skills__title">Cloud Technology</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">AWS</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Jenkins</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">CI/CD</h3>
                  <span className="skills__level">Intermediate</span>
                </div>
              </div>
            </div>

            <div className="skills__group">
              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Kubernetes</h3>
                  <span className="skills__level">Good</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Microservices</h3>
                  <span className="skills__level">Good</span>
                </div>
              </div>

              <div className="skills__data">
                <box-icon name="badge-check" color={badgeColor}></box-icon>
                <div>
                  <h3 className="skills__name">Serverless</h3>
                  <span className="skills__level">Good</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
