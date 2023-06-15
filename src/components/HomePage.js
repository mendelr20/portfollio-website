import React from 'react';

function HomePage() {
  return (
    <div className="bg-black text-white py-3">
      <div className="container">
        <h1>Welcome to My Portfolio Site</h1>
        
        <section>
          <h2>About Me</h2>
          <p>I am a full stack Software Engineer with a passion for Emergency Medicine, Currently a EMT and soon to be a Paramedic .</p>
        </section>
        
        <section>
          <h2>Education</h2>
          <ul>
            <li>Flatiron School, Full Stack Software Engineer, April 2023</li>
            <li>NMETC (National Medical Education & Training Center), Paramedic, Expected Graduation, July 2023</li>
            <li>B&H EMT (B&H Emergency Medical Training), EMT, August 2019</li>
          </ul>
        </section>
        
        <section>
          <h2>Awards and Achievements</h2>
          <ul>
            <li>Presidential Award - Bronze, Livingston Township / Hatzalah MetroWest, June 2023,</li>
            <li>Valedictorian, B&H EMT, August 2019</li>
          </ul>
        </section>
        
        <section>
          <h2>Work Experience</h2>
          <ul>
            <li>Senior Care EMS, EMT, got promnoted to the NYC 911 divison under FDNY in November of 2020, January 2020 - Current</li>
          </ul>
        </section>
        
        <section>
          <h2>Volunteer Experience</h2>
          <ul>
            <li>Hatzalah MetroWest, EMT & Memebr of Documentation Commitie, Since its incepetion on September 3, 2021 throught current</li>
          </ul>
        </section>
        
        <section>
          <h2>Contact Me</h2>
          <p>Provide your contact information, such as email and LinkedIn profile.</p>
        </section>
        
      </div>
    </div>
  );
}

export default HomePage;
