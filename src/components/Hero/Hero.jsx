import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark_arrow.png'



const Hero = () => {
    return (


        <div className='hero container'>
            <div className="hero-text">
                <h1>We Ensure better education for a better world </h1>
                <p>Our cutting-egde curriculum is designed to empower students with the knowlegde, skills and experince
                    needed to excel in the dynamic feild of education
                </p>
                <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
            </div>

        </div>
    )
}

export default Hero
