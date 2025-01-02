import React from 'react'
import './Layout2.css'

const Layout2 = () => {
    return (
        <div >
            <div className='Container'  id='Container'>

                <div className='Container-title'>
                    <h4>EMPLOYERS</h4>
                    <div className='Container-main'>
                        <h2>End-to-end virtual campus hiring</h2>
                        <p>Complete automation, right from - outreach to 24,000
                            campuses, engagement, assessments, virtual
                            interviews to industry benchmarking and analytics.</p>
                        <button className='start-button'>For Employers</button>
                    </div>
                </div>


                <div className='Container-title'>
                    <h4>UNIVERSITIES</h4>
                    <div className='Container-main'>
                        <h2>Digitise & automate placements online</h2>
                        <p>Effortlessly streamline your campus placement
                            process by accessing the latest job openings,
                            managing student data, and securing interviews, all
                            with the aim of achieving a 100% campus placementbr
                            success rate.</p>
                        <button className='start-button'>For Universities</button>
                    </div>
                </div>



                <div className='Container-title'>
                    <h4>STUDENTS</h4>
                    <div className='Container-main'>
                        <h2>Learn, prepare & apply to jobs</h2>
                        <p>Discover new opportunities, learn and practice on the go,
                            prepare better for interviews</p>
                        <button className='start-button'>For Students</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Layout2
