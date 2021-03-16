import React from 'react'
import './about.scss'

const About = ({image}) => {
  const restImage = `${image}`;
    return (
      <section>
        <div className="container">
          <h2>
            <span className="subheading">About</span>About Us
          </h2>
          <div className="content-about">
            <img src={restImage} alt="restaurant interior"></img>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.<br />
                OPEN HOURS: 
                10-10
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default About