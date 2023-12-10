import { Alert, Col, Container, Row } from "react-bootstrap";
import { Header } from "./Header";
import { Hidingdiv } from "./Hidingdiv";
import './AboutUs.css';
export function About() {

    const teamMembers = [
        {
            name: 'Purnendu Bhattacharjee',
            contactNo: '000-000-1234',
            email: 'purnendu2531@gmail.com',
            linkedin: 'https://www.linkedin.com/in/purnendubhattacharjee/',
        },
        {
            name: 'Mangesh Narkhede',
            contactNo: '000-000-1234',
            email: 'mangeshn@gmail.com',
            linkedin: 'https://www.linkedin.com/in/mangesh-narkhede-5b9523191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app@',
        },
        {
            name: 'Asawari Raut',
            contactNo: '000-000-1234',
            email: 'asawariraut07@gmail.com',
            linkedin: 'https://www.linkedin.com/in/asawari-raut-927906204/',
        },
    ];
    return (
        <>
        <div className="backimg"> 
            <Header></Header>

            <Container className="bodyy">
                <div className="about-container">
                    <div className="about-content">
                        <h2 className="aboutustext">About Us</h2>
                        <div className="member-cards">
                            {teamMembers.map((member, index) => (
                                <div className="member-card" key={index}>
                                    <h3>{member.name}</h3>
                                    <p>
                                        <strong>Contact No:</strong> {member.contactNo}
                                    </p>
                                    <p>
                                        <strong>Email:</strong> {member.email}
                                    </p>
                                    <p>
                                        <strong>LinkedIn:</strong>{' '}
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            LinkedIn Profile
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
            </div>
        </>
    );
}