import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>O mne</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    Jsem <span>Tomáš Ziegler</span>,
                  </h2>
                  <p>
                    jednadvacetiletý ajťák z Opavy. Obecně o informační
                    technologie se zajímám od 7. třídy základní školy. Přihlásil jsem se na seminář základů
                    programování, později jsem se však vše učil sám.<br/>

                    Několikrát jsem prohluboval znalosti angličtiny ve Velké Británii, na londýnské škole.<br/>

                    Rád cestuji a zkoumám, jak věci fungují. Hraju na různé druhy hudebních nástrojů, což mi pomáhá
                    relaxovat a udržovat kreativní myšlení.<br/>

                    K mým silným stránkám patří pozitivní přístup, chuť učit se novým věcem a dotahovat věci až do
                    konce.<br/>

                    Jako OSVČ jsem zvyklý na to, že se musím učit nové dovednosti a přizpůsobovat se novým
                    trendům a situacím.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Webovky : <span>www.urfolio.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>tomas.ziegler@outlook.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+420 603 765 731</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Město : <span>Opava</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Stáhnout CV
                      </a>
                      <a
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Kontaktovat
                      </a>
                    </div>
                  </div>
                </div>
                {/*<div className="skills padd-15">*/}
                {/*  <div className="row">*/}
                {/*    <div className="skill-item padd-15">*/}
                {/*      <h5>Html5</h5>*/}
                {/*      <div className="progress">*/}
                {/*        <div className="progress-in" style={{ width: "80%" }} />*/}
                {/*        <div className="skill-percent">80%</div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <div className="skill-item padd-15">*/}
                {/*      <h5>Css3</h5>*/}
                {/*      <div className="progress">*/}
                {/*        <div className="progress-in" style={{ width: "60%" }} />*/}
                {/*        <div className="skill-percent">60%</div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <div className="skill-item padd-15">*/}
                {/*      <h5>Javascript</h5>*/}
                {/*      <div className="progress">*/}
                {/*        <div className="progress-in" style={{ width: "50%" }} />*/}
                {/*        <div className="skill-percent">50%</div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*    <div className="skill-item padd-15">*/}
                {/*      <h5>Bootstrap</h5>*/}
                {/*      <div className="progress">*/}
                {/*        <div className="progress-in" style={{ width: "70%" }} />*/}
                {/*        <div className="skill-percent">70%</div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Certifikáty</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020
                          </h6>
                          <h4 className="timeline-title">
                            CCNA Routing and Switching: Introduction to Networks
                          </h4>
                          {/*<p className="timeline-text">*/}
                          {/*  Since 2020 I started to learn Programming. I have*/}
                          {/*  learn Html, Css, Sass, JavaScript, Bootstrap. Now I*/}
                          {/*  am a Professional Web Designer..*/}
                          {/*</p>*/}
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2020
                          </h6>
                          <h4 className="timeline-title">
                            NDG Linux essentials
                          </h4>
                          {/*<p className="timeline-text">*/}
                          {/*  From 2019 I started my journey to be a Civil*/}
                          {/*  Engineer on Shyamoli Ideal Polytechnic Institute. It*/}
                          {/*  still Running to Present.*/}
                          {/*</p>*/}
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022
                          </h6>
                          <h4 className="timeline-title">
                            CCNA Routing and Switching: Routing and Switching Essentials
                          </h4>
                          {/*<p className="timeline-text">*/}
                          {/*  In 2019 I passed SSC Exam from Science Group with*/}
                          {/*  GPA- 4.56. My school name was Patgram Anath Bondhu*/}
                          {/*  Govt. High School.*/}
                          {/*</p>*/}
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Pracovní zkušenosti</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2019 - 2023
                          </h6>
                          <h4 className="timeline-title">Ekomplex</h4>
                          <p className="timeline-text">
                            Tvorba, design a správa webových stránek.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2024 - Současnost
                          </h6>
                          <h4 className="timeline-title">Evidsoft</h4>
                          <p className="timeline-text">
                            Tvorba a správa webových stránek.<br/> Externí spolupracovník na OSVČ.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/*<div className="timeline-item">*/}
                        {/*  <div className="circle-dot" />*/}
                        {/*  <h6 className="timeline-date">*/}
                        {/*    <i className="fa fa-calendar" /> 2020 to Present*/}
                        {/*  </h6>*/}
                        {/*  <h4 className="timeline-title">Wordpress</h4>*/}
                        {/*  <p className="timeline-text">*/}
                        {/*    Since 2020 I started to learn Wordpress. I can*/}
                        {/*    install, Customize, &amp; fix bug on wordpress.{" "}*/}
                        {/*  </p>*/}
                        {/*</div>*/}
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
