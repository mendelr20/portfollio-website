import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="bg-black text-white py-3">
      <div className="container">
        <h1>Welcome to My Portfolio Site</h1>
        
        <section>
          <h2>About Me</h2>
          <p>I am a full-stack Software Engineer with a passion for Emergency Medicine. I am currently an NYC 911 EMT and soon to be a Paramedic.</p>
        </section>
        
        <section>
          <h2>Education</h2>
          <ul>
            <li><a href="https://www.flatironschool.com/">Flatiron School</a>, Full Stack Software Engineer, April 2023</li>
            <li><a href="https://nmetc.com/">NMETC (National Medical Education & Training Center)</a>, Paramedic, Expected Graduation, July 2023</li>
            <li><a href="https://www.bhemt.org/">B&H EMT (B&H Emergency Medical Training)</a>, NYS EMT, August 2019</li>
          </ul>
        </section>
        
        <section>
          <h2>Awards and Achievements</h2>
          <ul>
            <li><a href="https://presidentialserviceawards.gov/">Presidential Award - Bronze</a>, Livingston Township / Hatzalah MetroWest, June 2023</li>
            <li>Valedictorian, B&H EMT, August 2019</li>
          </ul>
        </section>
        
        <section>
          <h2>Work Experience</h2>
          <ul>
            <li><a href="https://seniorcareems.com/">Senior Care EMS</a>, EMT, promoted to the NYC 911 division under FDNY in November 2020, January 2020 - Present</li>
          </ul>
        </section>
        
        <section>
          <h2>Volunteer Experience</h2>
          <ul>
            <li><a href="https://www.hatzalahmetrowest.org/">Hatzalah MetroWest</a>, EMT & Member of Documentation Committee, Since its inception on September 3, 2021, to Present</li>
          </ul>
        </section>
        
        <section>
          <h2>Contact Me</h2>
          <p>Feel free to contact me through email or LinkedIn.</p>
          <p>
            Email: RosenblumMM@gmail.com<br />
            LinkedIn: <a href="https://www.linkedin.com/in/mendel-rosenblum/">Your LinkedIn Profile</a>
          </p>
          <p>
            <Link to="/contact">Contact Form</Link>
          </p>
        </section>
        
      </div>
    </div>
  );
}

export default HomePage;
