import React from 'react'
import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>

            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Embark on a transformative educational journey with our university's comprehensive
                    educational prgrams. Our cutting-egde curriculum is designed to empower students with knowlegde,
                    skills, and expriences needed to excel in dynamic feild of edication
                </p>
                <p>
                    With a focus on innovation, hands on learning, and personalized
                     mentorship, our programs prepare aspirirng educators to make a
                      meaningful impact in classrooms, schools, and communities.
                </p>

                <p>Whether you aspire to become a teacher, adminstrator, 
                    counselor, or educatonal leader, our diverse range of programs
                     offers the perfect pathway yo achieve your goals and 
                     unlock your full potential in shaping the future of education.</p>
            </div>


        </div>
    )
}

export default About
