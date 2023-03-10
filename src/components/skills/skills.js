import skills from "../../api/skills.js";
import "./skills.css";

const Skills =()=> {

    return (
        <section className="section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Skills</span>
                </div>
                <div className="row justify-content-center">
                    <div className="col ">
                    <h3>Languages</h3>
                        {Object.values(skills.languages).map(lang => (
                            <div><img src={lang} className="skillimg"></img></div>  
                        ))}
                    </div>
                    <div className="col">
                        <h3>Frontend</h3>
                        {Object.values(skills.frontend).map(lang => (
                            <div><img src={lang} className="skillimg"></img></div>
                        ))}
                    </div>
                    <div className="col">
                        <h3>Backend</h3>
                        {Object.values(skills.backend).map(lang => (
                            <div><img src={lang} className="skillimg"></img></div>
                        ))}
                    </div>
                    <div className="col">
                        <h3>Testing</h3>
                        {Object.values(skills.testing).map(lang => (
                            <div><img src={lang} className="skillimg"></img></div>
                        ))}
                    </div>
                    <div className="col">
                        <h3>Misc.</h3>
                        {Object.values(skills.misc).map(lang => (
                            <div><img src={lang} className="skillimg"></img></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;