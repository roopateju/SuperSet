import React from 'react'
import './Layout1.css'

const Layout1 = () => {

  return (
    <div>
      <div className='Wrapper'>
        <div className='hero'>
          <div className='hero-title'>
            <h1>Where Talent <br />Meets Opportunity</h1>
            <p>Superset helps fresh graduates get their first jobs,<br />
              enables employers to recruit faster, <br />
              and helps colleges streamline campus placements</p>
            <button className='start-button' ><a href="#Container">Get Started</a></button>

            <div className='users'>
              <div>27,00,000+ <br /><span>Students and Young Alumni</span></div>
              <div>600+ <br /><span>College Placement Cells</span></div>
              <div>12,800+ <br /><span>Employers</span></div>
            </div>
          </div>

          <div className='hero-imgs'>
            <img src="/img/herobg.jpg" alt="Hero background" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />;
            <div className='hero-persons'>
              <div className="persons-left">
                <img className='img1' src="/img/hero-person-1.png" alt="" />
                <img className='img2' src="/img/hero-person-3.jpg" alt="" />
              </div>
              <div className="person-right">
                <img className='img3' src="/img/hero-person-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout1
