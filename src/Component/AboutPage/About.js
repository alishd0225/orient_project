import React from "react";
import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import "./About.css";

const About = () => {
  return (
    <div>
      <Header />
      <h1>About Us</h1>
      <div className="first-paragraph">
        <p>
          Established in 2003 and located ideally at Basundhara, Kathmandu, in a
          peaceful and academic environment with spacious physical
          infrastructure, Orient College has been a popular name among parents
          and students in a very short span of time. This college is run by a
          well known team of educationists, academicians, eminent book writers,
          social workers and scholars who have professional experience and
          dedication. Due to the dedication of its associate, Orient is
          gradually fronting to the limelight with its motto, "Education for
          Excellence" in words and spirit. Orient family is committed in
          maintaining academic ethos in brining out the potential of Nepalese
          youth to shoulder the process of nation building, to meet the nation's
          requirement and to compete globally in diverse arena.
        </p>
        <p>
          Orient College houses different blocks for different academic
          programmes:Science, Management and Humanities under NEB, and BA/BSW
          and BBS programmes under TU. The Cambridge Block runs AS and A Level
          programmes under Cambridge University, UK. The team of dedicated
          professionals and faculties being distinctly renowned for their
          achievements in their specialization fields, leave no stone unturned
          to give a concrete shape in the best possible blueprint to fluid state
          of different level graduates.
        </p>
        <p>
          Our wider range of optional subjects to choose in different levels,
          including the practical and popular subject areas like Hotel
          Management, Travel and Tourism, Mass Communication and Computer
          Science, prepare the students in the global basis for the challenges
          in the century.
        </p>
      </div>
      <div className="vision-text">
        <h3>Our Vision</h3>
        <p>
          The college aims to impart holistic education to the pupils concerned
          with a strong focus on their moral development so that they can be
          morally sound denizens of the nation and work-not only for the
          enhancement of the self but also for others’ betterment. To put it
          differently, the college aims at educating young men and women to
          become intellectually, morally, socially and spiritually sound and
          committed in the services of humanity with a vigorous competition as
          we believe in the adage “the best competition ever is to compete to
          serve.”
        </p>
      </div>

      <div className="mission-text">
        <h3>Our Mission</h3>
        <p>
          Our mission is to be a leading educational institute by imparting
          pertinent knowledge, applied skills and a firm confidence to the
          learners by the help of education which is an admixture of
          spirituality and materiality that assists to build up morality and a
          sense of responsibility-not only toward the self but also towards the
          society.
        </p>
      </div>

      <div className="orient-college-choice">
        <h3>Why choose Orient college?</h3>
        <div>
          <ul>
            <li>
              To get value for money with an international quality education at
              a local cost.
            </li>
            <li>Highly equipped computer lab and science lab.</li>
            <li>
              Directed and/or run by highly experienced personnels having 20
              years of experience in the education sector.
            </li>
            <li>
              Emphasis on various ECAs under proper guidance of experts and
              notables in respective fields.
            </li>
            <li>To ensure that students get the education they deserve.</li>
            <li>
              Focus on excursion-based activities, project work,
              student-oriented research work and participatory teaching-learning
              activities and their presentation.
            </li>
            <li>
              Linked with various academic institution. • High calibre academic
              teaching facilities.
            </li>
            <li>Focus on formative and diagnostic evaluation.</li>
            <li>Scholarships are provided for deserving students.</li>
            <li>
              Brilliant learning environment along with an affordable
              internationally recognized qualification.
            </li>
            <li>
              Develop moral and ethical values through regular counselling and
              motivational classes.
            </li>
          </ul>
        </div>
      </div>

      <div className="salient-features">
        <h3>Salient Features</h3>
        <div>
          <ul>
            <li>Well Furnished classrooms, fitted with CCTV</li>
            <li>
              Fully stocked library with broad collection of text books,
              reference books, newspapers, magazines, journals and other
              educational and recreational books for the use of students.
            </li>
            <li>
              Periodical Seminars and trainings where interested students can
              learn the ins and outs of their chosen fields from professionals
              who have been working for years and have made a significant
              impact.
            </li>
            <li>Standard basketball court.</li>
            <li>
              Good and spacious cafeteria which is all set to provide healthy
              eats.
            </li>
            <li>Management information system.</li>
            <li>
              Well equipped science lab and computer lab (with high-speed
              internet)
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
