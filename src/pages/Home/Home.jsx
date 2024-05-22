import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'COURSE MATERIAL',
        description: 'Lecture Notes and Presentations: Download or view lecture notes, presentations, and supplementary materials shared by faculty members during class sessions. These resources help students reinforce their understanding of course concepts and prepare for assessments.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'EVENT CALENDER',
        description: 'Since many are not aware of the daily or annually fest that happen in our college ,so through this student can have knowlegde about the fest that happens in college'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'INTERNSHIP OPPORTUNITY',
        description: 'Since many student take reference from several website but not get the exact idea about the best suitable opportunity for them so through this they will get the idea about the best upcoming opportunity for them in the college '
    }
];

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>IIITL CAMPUS PORTAL</h1>
                <p>The "IIIT Campus Portal" is a comprehensive online platform designed to serve the diverse needs of students, faculty, staff, alumni, and other stakeholders associated with the Indian Institute of Information Technology (IIIT). It serves as a centralized hub for accessing a wide range of resources, services, and information related to academic, administrative, and extracurricular activities within the IIIT community.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>2024 start courses</h2>
                        <p>Curriculum Outline: Explore the curriculum outline or syllabus for each course, outlining the topics covered, learning objectives, teaching methodologies, and assessment methods. Understand the sequence of topics and the progression of learning activities throughout the semester.</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
                <div className='row g-4'>
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                {/* <Link to="/blog">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
                </Link> */}
            </div>
        </div>
    </div>
  )
}

export default Home;