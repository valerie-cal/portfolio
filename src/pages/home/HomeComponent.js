import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Education from "../../pages/education/EducationComponent";
import Experience from "../../pages/experience/Experience";
import Projects from "../../pages/projects/Projects";


class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        {/* <Skills theme={this.props.theme} /> */}
        <section id="education">
          <Education theme={this.props.theme} />
        </section>
        <section id="experience">
          <Experience theme={this.props.theme} />
        </section>
        <section id="projects">
          <Projects theme={this.props.theme} />
        </section>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
