import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "5px" }} />
                        <div>
                        <p>Gudivada ,AndhraPradesh</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "5px" }} /> 7981668918
                        </h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white"}} />  sudheerraavi777@gmail.com
                        </h4>
                    </div>

                </div>
                <div className="right">
                    <h4>Something about me </h4>
                    <p>I enjoy group discussions,I am a fast learner, enthusiastic to learn new technologies, I am capable to be a tram leader.</p>
                    <div className="social">
                    
                    <a href="https://instagram.com/_sudheer_raavi?igshid=MzMyNGUyNmU2YQ=="> <FaInstagram size={30} style={{ color: "white" }} /></a>
                    <a href="https://www.linkedin.com/in/sudheer-raavi-96088022b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin size={30} style={{ color: "white" }} /></a>
                    <a href="https://x.com/sudheer_raavi?t=dyQnG-V9unnO-sivQe7qvQ&s=09"><FaTwitter size={30} style={{ color: "white" }} /></a>
                    <a href="https://github.com/sudheer72"><FaGithub size={30} style={{ color: "white"}} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
