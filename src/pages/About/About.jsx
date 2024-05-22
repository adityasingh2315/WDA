import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';


const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    }
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>
Hello and welcome to our team at [IIIT Campus Portal]! We are a dedicated group of individuals committed to [brief description of your mission or purpose].

Meet Our Team:

Aditya (Team Leader):
Aditya is our enthusiastic and visionary team leader, guiding and inspiring us to achieve our goals with his leadership and strategic vision.

Aman:
Aman brings creativity and innovation to our team, with a keen eye for design and a passion for finding unique solutions to challenges.

Adarsh:
Adarsh is our dependable and detail-oriented team member, ensuring that every aspect of our project is meticulously planned and executed.

Goutam:
Goutam's technical expertise and problem-solving skills are invaluable assets to our team, as he navigates complex challenges with ease and precision.

Abhinash:
Abhinash is our dynamic and resourceful team member, always ready to tackle new challenges head-on and adapt to changing situations with agility..</p>
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                    <p>!</p>
                    <p className='mb-4 mb-lg-5'>At IIIT Lucknow students can pursue their academic passions, expand their horizons, and achieve their full potential. Whether you're a prospective student looking to embark on your educational journey or a lifelong learner seeking to enhance your skills, we invite you to join our community of dedicated scholars, researchers, and innovators.

Why Choose Us?

Academic Excellence: Our institution is renowned for its commitment to academic rigor, innovation, and excellence. Our faculty members are experts in their fields, and our programs are designed to challenge and inspire students to reach new heights of achievement.

Cutting-edge Research: We are at the forefront of groundbreaking research and discovery across a wide range of disciplines. From pioneering scientific breakthroughs to innovative solutions for real-world challenges, our research endeavors are making a positive impact on society and shaping the future.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <ChooseSection />
        </div>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <h2 className='text-center mb-5'>Our Winners</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;