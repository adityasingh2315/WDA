import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked Question </h2>
            <p className='text-center mb-5'>here a quick faq for your help.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What is the recent year placement of IIIT Lucknow ? ?</Accordion.Header>
                    <Accordion.Body>
                        The average placement of IIIT Lucknow for the year 2023 is 30.5 lpa.
                       
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Which is the nearest railway station to IIIT Lucknow? ?</Accordion.Header>
                    <Accordion.Body>
                        Charbagh Railwway Station.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header> What are the names of diff Cultural and technical club of IIIT Lucknow College? ?</Accordion.Header>
                    <Accordion.Body>
                        Goonj, Estrella, Crotonia, After Dark , Zypher, Axios.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How are the senior and junior interaction at IIIT Lucknow  ?</Accordion.Header>
                    <Accordion.Body>
                    Academic Assistance: Seniors  offer academic assistance to juniors, sharing study materials, notes, and resources, and helping them understand complex concepts or solve problems related to coursework.

                        
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;