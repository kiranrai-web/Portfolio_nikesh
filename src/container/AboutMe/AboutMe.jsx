import "./AboutMe.css";

import { SkillsSlider, MyJourney } from "../../component";

const AboutMe = () => {
  return (
    <div className="section__padding aboutme__wrapper p__roboto" id="about">
      <div className="AboutMe__left">
        <MyJourney />
      </div>
      <div className="AboutMe__right">
        <h1>How do I edit videos?</h1>
        <p>
          I see video editing as more than just cutting clips. It’s about
          understanding emotion, rhythm, and purpose. My approach blends
          creativity with structure, ensuring each frame adds meaning to the
          story.
        </p>
        <p>
          I enjoy working on both short-form and long-form projects,
          experimenting with motion graphics, pacing, and sound design to create
          edits that feel alive and dynamic.
        </p>
        <p>
          When I’m not editing, I’m usually exploring new storytelling styles,
          learning visual trends, or finding ways to make everyday moments
          cinematic.
        </p>
        <SkillsSlider />
      </div>
    </div>
  );
};

export default AboutMe;
