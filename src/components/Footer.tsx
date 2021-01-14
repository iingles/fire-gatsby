import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGoogle, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row justify-content-center">
                    <h5>&copy;{new Date().getFullYear()} Isaac Ingles</h5>
                </div>

                <div className="row pa-5 social-links justify-content-center align-items-baseline">
                    <a href="http://isaacingles.com/resume.pdf" className="d-flex flex-column align-items-center justify-content-center mr-4 res-link">
                        <FontAwesomeIcon icon={faFilePdf} />
                    </a>
                
                    <a href="https://github.com/iingles" title="Isaac Ingles Profile on Github" className="d-flex mr-4 justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                
                    <a href="https://www.linkedin.com/in/isaac-ingles-193306192/" title="Isaac Jacob Ingles Linkedin"
                        className="mr-4">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
            
                    <a href="mailto:isaac.ingles@gmail.com" 
                    className="mr-4"
                    title="Isaac Jacob Ingles email">
                        <FontAwesomeIcon icon={faGoogle} />
                    </a>
                </div>
            </div>
        </footer>
    )
}
