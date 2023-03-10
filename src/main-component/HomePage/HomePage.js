import React, { Fragment } from 'react';
import About from '../../components/about/about';
import BackToTop from '../../components/backToTop/backToTop';
import Hero from '../../components/hero/hero';
import Navbar from '../../components/Navbar/Navbar';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Skills from '../../components/skills/skills';
import { Element } from 'react-scroll'
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar />
            <Element name='home'>
                <Hero />
            </Element>
            <Element name='about'>
                <About />
            </Element>
            <Element name='project'>
                <ProjectSection />
            </Element>
            <Element name='skills'>
                <Skills/>
            </Element>
            <Element name='contact'>
                <Footer />
            </Element> 
            <BackToTop />
        </Fragment>
    )
};
export default HomePage;