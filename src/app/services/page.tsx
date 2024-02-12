import type {NextPage} from "next";

const Service: NextPage = () => {
    return (
        <>
            <section className="service section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Mé služby</h2>
                        </div>
                    </div>
                    <div className="row">
                        {/* Service Item 1: Logo Design */}
                        <div className="service-item padd-15">
                            <div className="service-item-inner">
                                <div className="icon"><i className="fa fa-cog"/></div>
                                <h4>Servis</h4>
                                <p>Opravy, údržby a instalce zařízení jako jsou počítače, notebooky<br/></p>
                            </div>
                        </div>
                        {/* Service Item 1 End */}
                        {/* Service Item 2: Web Design */}
                        <div className="service-item padd-15">
                            <div className="service-item-inner">
                                <div className="icon"><i className="fa fa-database"/></div>
                                <h4>Databáze</h4>
                                <p>Navrhnu a realizuji databázi přesně dle vašich potřeb</p>
                            </div>
                        </div>
                        {/* Service Item 2 End */}
                        {/* Service Item 3: WordPress */}
                        <div className="service-item padd-15">
                            <div className="service-item-inner">
                                <div className="icon"><i className="fa fa-code"/></div>
                                <h4>Webové stránky</h4>
                                <p>Design, vývoj a správa webových stránek, přesně dle Vašich požadavků</p>
                            </div>
                        </div>
                        {/* Service Item 3 End */}
                        {/* Service Item 4: Web Development */}
                        <div className="service-item padd-15">
                            <div className="service-item-inner">
                                <div className="icon"><i className="fa fa-users"/></div>
                                <h4>IT konzultace</h4>
                                <p>Řešení a konzultace všech Vašich problémů ze světa IT </p>
                            </div>
                        </div>
                        {/* Service Item 4 End */}
                        {/* Service Item 5: Video Editing */}
                        <div className="service-item padd-15">
                            <div className="service-item-inner">
                                <div className="icon"><i className="fa fa-image"/></div>
                                <h4>Úprava fotografií</h4>
                                <p>Odstranění vodoznaků, různé grafické úpravy fotografií </p>
                            </div>
                        </div>
                        {/* Service Item 5 End */}
                        {/* Service Item 6: SEO Optimization */}
                        {/*<div className="service-item padd-15">*/}
                        {/*    <div className="service-item-inner">*/}
                        {/*        <div className="icon"><i className="fa fa-image"></i></div>*/}
                        {/*        <h4>SEO Optimization</h4>*/}
                        {/*        <p>Boost your online visibility and drive organic traffic to your website with our SEO*/}
                        {/*            optimization*/}
                        {/*            services.*/}
                        {/*            Our experts employ proven strategies to improve your search engine rankings and grow*/}
                        {/*            your online*/}
                        {/*            presence.*/}
                        {/*        </p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/* Service Item 6 End */}
                    </div>
                </div>
            </section>


        </>
    );
};

export default Service;
