import React from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/art-course.jpg';
import BusinessCourseImg from '../../utils/images/business-course.jpg';
import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
import EducationCourseImg from '../../utils/images/education-course.jpg';

import MusicCourseImg from '../../utils/images/music-course.jpg';
import SportCourseImg from '../../utils/images/sport-course.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: [ArtCourseImg],
        title: 'Syllabus Course',
        description: 'The Syllabus Design and Curriculum Development course at IIIT provides students with the knowledge and skills necessary to design, develop, and evaluate effective syllabi and curricula for educational programs. Through a combination of theoretical concepts, practical exercises, and case studies, students will explore various approaches to syllabus design, curriculum planning, instructional strategies, and assessment methods.!'
    },
    {
        id: 2,
        img: [BusinessCourseImg],
        title: 'Business Course',
        description: 'The Computer Science course at IIIT provides students with a foundational understanding of key concepts, principles, and practices in computer science. Through a combination of lectures, hands-on assignments, and practical projects, students will explore fundamental topics in computer science, including programming, algorithms, data structures, software engineering, and computer systems.!'
    },
    {
        id: 3,
        img: [ComputerScienceCourseImg],
        title: 'Computer Science Course',
        description: 'The Computer Science course at IIIT provides students with a foundational understanding of key concepts, principles, and practices in computer science. Through a combination of lectures, hands-on assignments, and practical projects, students will explore fundamental topics in computer science, including programming, algorithms, data structures, software engineering, and computer systems.!'
    },
    {
        id: 4,
        img: [EducationCourseImg],
        title: 'Education Course',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam odio eos distinctio ducimus! Modi quaerat dolores illo accusamus maxime cupiditate culpa minus animi repellat autem!'
    },
    
    
    {
        id: 7,
        img: [MusicCourseImg],
        title: 'Job Course',
        description: 'This platform will tell about the opportunity regarding the domain of student like if they want to pursue tech field job or want to go for higher education!'
    },
    {
        id: 8,
        img: [SportCourseImg],
        title: 'Sports Event ',
        description: 'This will tell the sports relate devent in the campus like infinito which ics the annual fest of our college!'
    },
];

function Courses() {
  return (
    <div className='courses-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Our Courses</h1>
                <p className='text-center w-75 mb-5'>Understand the basic principles and theories of computer science.
Develop proficiency in programming languages such as Python and Java.
Analyze and design algorithms to solve computational problems efficiently.
Implement and manipulate data structures such as arrays, linked lists, stacks, and queues.
Apply problem-solving strategies and debugging techniques to solve programming challenges.
Develop computational thinking skills and logical reasoning abilities.!</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Courses;