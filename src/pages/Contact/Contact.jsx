import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/London-location.jpg';
import ManchesterLocationImg from '../../utils/images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../utils/images/Liverpool-location.jpg';


function Contact() {
  return (
    <>
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Get In Touch</h1>
                <p className='text-center w-75 mb-5'>Certainly! If you have any further questions or need assistance, feel free to get in touch with me. You can ask your questions here, and I'll do my best to help you. If you have specific inquiries or need more detailed assistance, you can also provide additional information, and I'll tailor my response accordingly. !</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form'>
                
            <Form.Group className='mb-3' style={{width:'370px'}}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder='*Name' />
                </Form.Group>

                <Form.Group className='mb-3 ' style={{width:'370px'}}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' style={{width:'370px'}}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='Your address' />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Location</Form.Label>
                        <Form.Select defaultValue="London">
                            <option>Lucknow</option>
                            <option>Mau</option>
                            <option>Ballia</option>
                        </Form.Select>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control placeholder='Postcode' />
                    </Col>
                </Row>

                <Form.Group className='mb-3' style={{width:'370px'}}>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control as="textarea" rows={3}  />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
            {/* signUp(data).then((resp)=>{
                console.log(resp)
                console.log("success log")
  }).catch((error)=>{
    console.log(error)
    console.log("error log")
  }) */}
  
  
            
        </div>

        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Our Locations</h2>
                <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LondonLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Lucknow</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={ManchesterLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Mau</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={LiverpoolLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Ballia</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact;