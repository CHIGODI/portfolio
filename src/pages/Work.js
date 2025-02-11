import mtreat from '../images/logo-mtreat.jpg';
import equip from '../images/equip.jpg';
import tndc from '../images/tndc-logo-2-2.png';

const Work = () => {
    return(
        <>
            <div class="work-experience">
                <h6 class="sub-title">Work Experience</h6>

                <div class="experience-card">
                    <div class="logo">
                        <img className="my-work-imgs" src={mtreat} alt="epermit landing page" />
                    </div>
                    <div class="details">
                        <h3>M-TREAT</h3>
                        <p class="position">Full-Stack Software Engineer -- 2023 - Present</p>
                        <p class="description">
                            Designed and developed the frontend using React.js and MUI, ensuring reusable components and clean code. Integrated and debugged backend services written in Django to enhance functionality and performance..
                        </p>
                    </div>
                </div>

                <div class="experience-card">
                    <div class="logo">
                        <img className="my-work-imgs" src={tndc} alt="epermit landing page" />
                    </div>
                    <div class="details">
                        <h3>The New Dimension College</h3>
                        <p class="position">Software Engineering Istructor -- 2025</p>
                        <p class="description">
                            AMentored software engineering students and provided foundational training in software development. Focused on building a strong understanding of computer science fundamentals and fostering a culture of self-learning.
                        </p>
                    </div>
                </div>

                <div class="experience-card">
                    <div class="logo">
                        <img className="my-work-imgs" src={equip} alt="epermit landing page" />
                    </div>
                    <div class="details">
                        <h3>Equip Africa Institute</h3>
                        <p class="position">ICT Trainer -- 2023</p>
                        <p class="description">
                            Trained students in databases (MySQL, MS Access), ICT security, and digital literacy. Developed strong communication skills and the ability to simplify complex concepts for effective learning.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Work;