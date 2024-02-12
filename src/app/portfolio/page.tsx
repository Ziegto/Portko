import type {NextPage} from "next";
import 'devicon/devicon.min.css';

const Portfolio: NextPage = () => {
    return (
        <div>
            <section className="portfolio section" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Technologie</h2>
                        </div>
                    </div>
                    {/*<div className="row">*/}
                    {/*  <div className="portfolio-filter padd-15">*/}
                    {/*    <button type="button" className="active" data-filter="all">*/}
                    {/*      All*/}
                    {/*    </button>*/}
                    {/*    <button type="button" data-filter="graphics-design">*/}
                    {/*      Graphics Design*/}
                    {/*    </button>*/}
                    {/*    <button type="button" data-filter="web-design">*/}
                    {/*      Web Design*/}
                    {/*    </button>*/}
                    {/*    <button type="button" data-filter="wordpress">*/}
                    {/*      Wordpress*/}
                    {/*    </button>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                    <div className="row">
                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-csharp-plain colored"></i>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-cplusplus-plain colored"></i>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-c-plain colored"></i>

                            </div>
                        </div>

                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-java-plain colored"></i>

                            </div>
                        </div>

                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-javascript-plain colored"></i>

                            </div>
                        </div>

                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-react-original colored"></i>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-typescript-plain colored"></i>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-php-plain colored"></i>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-python-plain colored"></i>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-sass-plain colored"></i>
                            </div>
                        </div>


                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-github-original"></i>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-mysql-plain colored"></i>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-oracle-plain colored"></i>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-wordpress-plain"></i>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-jetbrains-plain"></i>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-bitbucket-plain colored"></i>
                            </div>
                        </div>
                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-googlecloud-plain colored"></i>
                            </div>
                        </div>

                        <div className="portfolio-item padd-15" data-category="web-design">
                            <div className="portfolio-img">
                                <i className="devicon-linux-plain colored"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
