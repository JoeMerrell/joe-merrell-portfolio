import React from 'react';

function About() {
  return (
    <section>
      <h5 id="about" className="text-head">About me</h5>
      <p className="basic">Born in Seattle, Washington, I'm a Los Angeles-based artist and web developer. My education includes degrees in philosophy, art(film), as well as a certificate in full-stack web development earned at UCLA's Coding Bootcamp. My web-related technical skills include:</p>
        <ul className="basic">
            <li>JavaScript</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>SQL</li>
            <li>HTML/CSS</li>
        </ul>
        <p className="basic">In addition to coding, I have experience in digital media using a range of software packages including:</p>
        <ul className="basic">
            <li>Cinema4D (cg modeling & animation)</li>
            <li>AfterEffects</li>
            <li>Photoshop/Illustrator</li>
            <li>Premier Pro/Final Cut Pro</li>
            <li>Unreal (gaming/3d Interactive)</li>
        </ul>
        <p className="basic">More detailed information can be found at the Resume link above.</p>


    </section>
  );
}

export default About;