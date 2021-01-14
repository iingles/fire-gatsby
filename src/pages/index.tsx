import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout {...location} title={siteTitle}>
      <SEO title="Welcome to Isaac's Blog" />

        <div className="container">
          <div className="row mb-5 contact-info flex-lg-column justify-content-center align-items-center">
              <h2>I'm a freelance web developer.  Whatever your digital woes, I can help you find a solution.</h2>                
              isaac.ingles@gmail.com | ‪(801) 252-5428 | West Jordan, UT
          </div>

          <article id="objective" className="row content-box">
              <header className="section-header">
                  <h1>Objective</h1>                        
              </header>
              <p>
                  First and foremost, I'm a problem solver. I stay up to date on the latest trends and
                  technologies so that
                  I can bring to bear the optimal solution for you to achieve your goals. I'm platform-agnostic -
                  whatever technology you choose
                  to use, I can leverage my skills to get things done.
                  <br />
                  I strongly believe that my own success is measured by the success of those whom I serve.
              </p>
          </article>

          <article id="experience" className="row content-box">
              <header className="section-header">
                  <h1>Experience</h1>
                  <h2>Places I've worked. Things I've accomplished.</h2>
              </header>
              
              <div className="container">
                  <div className="row">
                      <div className="col job-description">
                          <header className="job-header">
                              <h3>Long Journey Digital</h3>
                              <h4>Web Developer / Digital Storyteller</h4>
                              <h4>West Jordan, Utah</h4>
                          </header>
                          <p>
                              I work as a freelance web developer through Long Journey Digital. I've built
                              websites for the ACLU of Utah, Agent Intel, and EnrollUT.
                              I've helped enhance the online prescence of my clients through SEO and assistance
                              with social media marketing. I strive to help each brand
                              tell its story and connect with others through the digital medium.
                          </p>
                      </div>
                  </div>

                  <div className=" row">
                      <div className="col job-description">
                          <header className="job-header">
                              <h3>Axis41</h3>
                              <h4>Web Developer</h4>
                              <h4>Salt Lake City, Utah</h4>
                          </header>
                          <p>
                              I Built and maintained both front-end and back-ends of websites for clients such as Adobe, Best Buy, Sinclair Oil, and OC
                              Tanner.  I made it a point to stay up to date on best practices and new technologies.  I used SEO techniques to help 
                              enhance the discoverability of these websites.
                          </p>
                      </div>
                  </div>
                  

                  <div className=" row">
                      <div className="col job-description">
                          <header className="job-header">
                              <h3>Utah State Hospital</h3>
                              <h4>Psychiatric Technician</h4>
                              <h4>Provo, Utah</h4>
                          </header>
                          <p>
                              I Provided direct care to ambulatory psychiatric patients under supervision of a 
                              registered nurse. I ran therapy groups under the supervision of a social worker.
                              Documented daily patient behavior.  I was trained in HIPPA guidelines, Situation Intervention Techniques,
                              and as a Professional Rescuer by the American Red Cross.  I also recieved training to be on the Community
                              Emergency Response Team for the Utah State Hospital.
                          </p>
                      </div>
                  </div>

                  <div className=" row">
                      <div className="col job-description">
                          <header className="job-header">
                              <h3>The Church of Jesus Christ of Latter Day Saints</h3>
                              <h4>Audiovisual Technician</h4>
                              <h4>Salt Lake City, Utah</h4>
                          </header>
                          <p>
                              I Set up, operated, and maintained lighting and sound equipment for Church broadcasts and theatrical productions.  
                              I was trained in various lighting and production techniques, on basic cinematography, and how to work safely
                              with high-voltage electricity.
                          </p>
                      </div>
                  </div>

              </div>

          </article>

          <article id="education" className="row content-box">
              <header className="section-header">
                  <h1>Things I've learned in life</h1>
                  <h2>Formal and informal education and training I've recieved.</h2>
              </header>

              <div className="container">
                  <div className=" row">
                      <div className="col job-description">
                          <header className="job-header">
                              <h3>Utah Valley University</h3>
                              <h4>Bachelor of Science, Web Design and Development</h4>
                              <h4>Associate of Applied Science, Web Design and Development</h4>
                              <h4>Associate of Applied Science, Digital Communication Technology</h4>
                              <h4>Orem, Utah</h4>
                          </header>
                          <p>
                              Coursework and community service projects involving semantic markup, responsive layouts, design principles, 
                              various programming languages, hosting platforms, version control, digital media formats, project management,
                              graphic design, corporate issues and contracts, project documentation, cinematography, video production, photography, 
                              web prinicples, digital media essentials, 3D modeling, digital audio, and more.
                          </p>
                      </div>
                  </div>

                  <div className="row">
                      <div className="col job-description">
                          <header className="job-header">
                              <h3>United States Army Reserve</h3>
                              <h4>MOS 12B - Combat Engineer</h4>
                              <h4>Military Experience</h4>
                          </header>
                          <p>
                              Trained in basic combat skills, mobility/countermobility operations, including obstacles, demolition, and construction.  
                          </p>
                      </div>
                  </div>


              </div>
          </article>
        </div>

    </Layout>
  )
}

export default Index


