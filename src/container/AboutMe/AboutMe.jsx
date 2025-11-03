import "./AboutMe.css";

import { SkillsSlider, MyJourney } from "../../component";

const AboutMe = () => {
  return (
    <div className="section__padding aboutme__wrapper p__roboto" id="about">
      <div className="AboutMe__left">
        <MyJourney />
      </div>
      <div className="AboutMe__right">
        <h1>About Me</h1>
        <p>
          I am passionate about producing high-quality video content that is
          visually stunning and emotionally engaging, focusing on storytelling
          that deeply connects with viewers.
        </p>
        <p>
          I have experience editing short-form and long-form content for a
          variety of clients, delivering polished, engaging videos tailored to
          diverse audiences and their unique needs.
        </p>
        <SkillsSlider />
      </div>
    </div>
  );
};

export default AboutMe;
