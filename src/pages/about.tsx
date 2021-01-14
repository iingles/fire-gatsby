import React from 'react'
import Layout from '../components/layout'

const About = ({ data, location}) => {
    return (
        <Layout {...location} title="About">
            <div className="container">
                <article id="about" className="row content-box">
                    <header className="section-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src="/img/isaac-bw.jpg" />
                                </div>
                                <div className="header-text col-lg-8 d-flex flex-column justify-content-center align-items-center">
                                    <h1>A little more about Isaac</h1>
                                    <h2>Biography, Background, and Life Experience.</h2>
                                </div>
                            </div>
                        </div>                        
                    </header>

                    <div className="about-body">
                        <h3><strong>TL;DR - I was born and raised in Utah and have lived here most of my life.</strong></h3>

                        <p>
                            I was born a couple of decades ago in Murray, Utah, and grew up in Bountiful, Utah.  My dad was a HVAC tradesman and my mom an English teacher.  I was obsessed with 
                            the American flag, police officers, and patriotism when I was very young, and wanted to be a policeman or a soldier.  I grew up loving
                            MegaMan, Ninja Turtles, and playing with Legos.  I've always loved bunnies.

                            I was into Star Wars and Dungeons and Dragons into my teen years, and experimented a little with the martial arts (even if I never really got good).
                            I've always loved to write and draw, and flex my creative muscle.  

                            I joined the Army Reserve just after high school and spent six years as a weekend warrior.  I fell in love with the idea of filmmaking and for 
                            the better part of a decade worked various side jobs in the film/TV/theater industry alongside my primary job before finally realizing that 
                            you really don't get to be creative making movies unless you're at the top of the food chain, and it's probably the most competitive industry 
                            in the world to break into.

                            I've been through most of the Western U.S. states, many of the states in the Midwest, and a couple of states on the east coast. of the I've been outside of 
                            the country a few times, in 2003 I took a trip to Belize, and in 2009 I took a trip to Europe.

                            I'd taken some programming classes in high school and I felt fairly competent at it - so I took some classes at UVU and got a job as a Web Developer.
                            I found that I enjoyed this profession because it was challenging and I got to be creative and actually make some good money doing it.

                            I generally listen to Trance music while I'm working because it helps me focus; I've been diagnosed with ADD as well as high-functioning autism.

                            I've made some mistakes along the way, and done things that I'm not proud of.  I'm happy to discuss this further with people who are genuinely interested.
                            
                            If you want to know more, drop me a line!
                        </p>
                    </div>
                </article>
            </div>
            
        </Layout>
    )
}

export default About