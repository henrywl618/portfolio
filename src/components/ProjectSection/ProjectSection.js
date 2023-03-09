import React, { useState } from 'react';
import Projects from '../../api/project'
import ProjectSingle from '../ProjectSingle/ProjectSingle';
import "./ProjectSection.css";


const ProjectSection = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const [number, setCount] = useState(3);
    const [buttonActive, setButtonState] = useState(false);

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }
    return (

        <section className="tp-project-section section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Projects</span>
                    <h2>My Latest Projects</h2>
                </div>
                <div className="tp-project-wrap">
                    <div className="row">
                        {Projects.slice(0, number).map((project, pro) => (
                            <div className="col col-xl-4 col-lg-6 col-sm-12 col-12" key={pro}>
                                <div className="tp-project-item">
                                    <a href={project.url} target="_blank">
                                    <div className="tp-project-img">
                                        <img src={project.pImg} alt="" />
                                    </div>
                                    </a>
                                    <div className="tp-project-content">
                                        <span>{project.subTitle}</span>
                                            <a href={project.url} target="_blank"><h2>{project.title}</h2></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`project-btn ${buttonActive ? "d-none" : ""}`}>
                        <span onClick={() => setButtonState(!buttonActive)}>
                            <button className="theme-btn" onClick={() => setCount(number + number)}>View all work</button>
                        </span>
                    </div>
                </div>
            </div>
            <ProjectSingle open={open} onClose={handleClose} title={state.title} pImg={state.ps1img} psub1img1={state.psub1img1} psub1img2={state.psub1img2} />

            <div className="visible-rotate-text">
                <h1>My Projects</h1>
            </div>
        </section>
    );
}

export default ProjectSection;