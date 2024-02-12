export default async function Home() {

    return (
        <main>
            <section className="home section" id="home">
                <div className="container">
                    <div className="intro">
                        <img
                            src="/imgs/alsiam.png"
                            alt="Tomas Ziegler photo"
                            className="shadow-dark"
                        />
                        <h1>Tomáš Ziegler</h1>
                        <p>Full-stack developer</p>
                        <div className="social-links">
                            {/*<a href="https://twitter.com/" target="_blank">*/}
                            {/*  <i className="fa fa-twitter" />*/}
                            {/*</a>*/}
                            {/*<a href="https://facebook.com/" target="_blank">*/}
                            {/*    <i className="fa fa-discord"/>*/}
                            {/*</a>*/}
                            <a href="https://github.com/ziegto" target="_blank">
                                <i className="fa fa-github"/>
                            </a>
                            <a href="https://instagram.com/umelec_tom" target="_blank">
                                <i className="fa fa-instagram"/>
                            </a>
                            <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-ziegler-327284210/" target="_blank">
                                <i className="fa fa-linkedin"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
