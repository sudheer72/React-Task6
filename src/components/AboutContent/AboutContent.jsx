import React from 'react'
import './AboutContent.css'
import { Link } from 'react-router-dom'
import r1 from './../../assets/react1.jpg'
import r2 from './../../assets/react2.webp'

const AboutContent = () => {
    return (
        <div className='about'>
            <div className="left">
                <h1>Who Am I</h1>
                <p>Hello 👋, my name is RAVI SUDHEER. I Am A Student In Vellore Institue Of Technology, Amaravati. Currently, I Am Pursuing My B.Tech In The Department Of Computer Science And Engineering. I am a front end developer with great passion for website design. I have been working on the front end for some time, have also created some projects which you can see on my GitHub and will continue to do so. Apart from front end skills, I also know some programming languages like python and java. A lot of Projects I have done in the unviersity based on IOT they are IOT based railway track crack alert system, IOT-based Smart Door Lock and manymore.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="image-container">
                    <div className="image-stack top">
                        <img src={r1} alt="image" className='img' />
                    </div>
                    <div className="image-stack bottom">
                        <img src={r2} alt="image" className='img' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutContent
