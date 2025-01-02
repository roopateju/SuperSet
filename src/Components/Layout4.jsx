import React, { useState, useEffect } from 'react';
import './Layout4.css';
import CollegeInfo from './CollegeInfo';

const Layout4 = () => {
    const collegeDetails = CollegeInfo();

    const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

    const handlePersonClick = (index) => {
        setCurrentPersonIndex(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentPersonIndex((prevIndex) => (prevIndex + 1) % collegeDetails.persons.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [collegeDetails.persons.length]);

    const currentPerson = collegeDetails.persons[currentPersonIndex];

    return (
        <div>
            <div className="College">
                <h2>Why colleges love Superset</h2>

                <div className="College-Persons">
                    {collegeDetails.persons.map((person, index) => (
                        <img
                            key={index}
                            src={person.imgSrc}
                            alt={person.name}
                            title={person.name}
                            className={index === currentPersonIndex ? 'selected' : 'blurred'}
                            onClick={() => handlePersonClick(index)} 
                        />
                    ))}
                </div>

                <div>
                    <div className="college-msg">
                        <p>{currentPerson.msg}</p>
                    </div>
                    <div className="college-description">
                        <p>{currentPerson.description}</p>
                    </div>
                </div>

                <div className="college-logo">
                    <img src={currentPerson.logo} alt={`${currentPerson.name} Logo`} />
                </div>

                <div className="college-persons-details">
                    <div className="person-detail">
                        <h4 className="person-name">{currentPerson.name}</h4>
                        <p className="person-designation">{currentPerson.designation}</p>
                        <p className="person-university">{currentPerson.university}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout4;
