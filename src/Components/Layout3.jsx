import React from 'react';
import { universityData } from './Images'; 
import './Layout3.css'

const Layout3 = () => {
    return (
        <div>
            <div className="Layout-main">
                <div className="main">
                    <h2>UNIVERSITIES</h2>
                    <p>The official campus <br /> placement portal for 600+ <br /> colleges in India.</p>
                </div>
                
                <div className="main-imgs">
                    <div className="universities">

                        {universityData.map((university, index) => (
                            <div key={index} className="university">
                                <div className="university-img">
                                    <img src={university.image} alt={university.name} />
                                </div>
                                <div className="university-name">
                                    <h3>{university.name}</h3>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout3;
