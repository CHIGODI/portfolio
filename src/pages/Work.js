import fobros from '../images/fobros.jpg';
import equip from '../images/equip.jpg';

const Work = () => {
    return(
        <>
            <div class="work-experience">
                <h6 class="sub-title">Work Experience</h6>
                <div class="experience-card">
                    <div class="logo">
                        <img className="my-work-imgs" src={fobros} alt="epermit landing page" />
                    </div>
                    <div class="details">
                        <h3>Fobros Technologies</h3>
                        <p class="position">Front-End Developer -- 2023 - Present</p>
                        <p class="description">
                            As a Front-End Developer at FobrosTechnologies, I lead a team in designing and
                            developing user-centric web applications using React, Next.js, and modern
                            front-end technologies. I collaborate closely with cross-functional teams to
                            deliver high-quality digital solutions, ensuring seamless integration with
                            backend services like Supabase.
                        </p>
                    </div>
                </div>

                <div class="experience-card">
                    <div class="logo">
                        <img className="my-work-imgs" src={equip} alt="epermit landing page" />
                    </div>
                    <div class="details">
                        <h3>Equip Africa Institute</h3>
                        <p class="position">Web Developer -- 2019 - 2023</p>
                        <p class="description">
                            As a Front-End Developer at Equip Africa, I specialized in designing and developing
                            seamless, responsive web applications and websites utilizing React. My role
                            involved creating user-friendly interfaces that ensure optimal user experience
                            across various devices and platforms, contributing significantly to the
                            enhancement of Equip Africa's digital presence.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Work;