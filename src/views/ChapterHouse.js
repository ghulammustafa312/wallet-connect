import React from 'react';
import { Button, Col, Container, Input, Label, Row } from 'reactstrap';
import './chapterHouse.css';
import Picture from '../assets/img/chapter.2e53aacf.png';
const ChapterHouse = () => {
  return (
    <>
      <Container>
        <div className='text-center mt-5'>
          <img src={Picture} alt='...' />
          <p style={{ fontSize: '20px', color: '#3A2050' }}>
            Please fill out the following Admission Form for the registration of
            your children in school
          </p>
        </div>
        <Row className='chapter__label'>
          <Col md='4'>
            <Label className='mt-1'>Class*</Label>
            <Input
              type='text'
              name='class'
              placeholder='Enter Class Name'
              required
            />
          </Col>
          <Col md='4'>
            <Label className='mt-1'>Student Name*</Label>
            <Input
              type='text'
              name='studentname'
              placeholder='Enter Student Name'
              required
            />
          </Col>
          <Col md='4'>
            <Label className='mt-1'>Father Name*</Label>
            <Input
              type='text'
              name='fathername'
              placeholder='Enter Father Name'
              required
            />
          </Col>
          <Col md='4'>
            <Label className='mt-1'>Date of Birth*</Label>
            <Input
              type='text'
              name='dob'
              placeholder='Enter Date of Birth '
              required
            />
          </Col>
          <Col md='4'>
            <Label className='mt-1'>Phone no*</Label>
            <Input type='text' name='phoneno' placeholder='Enter Phone No' />
          </Col>
          <Col md='4'>
            <Label className='mt-1'>Mobile*</Label>
            <Input
              type='text'
              name='mobile'
              placeholder='Enter Mobile Number '
              required
            />
          </Col>
          <Col md='12'>
            <Label className='mt-1'>Last Attended School and Class</Label>
            <Input
              type='textarea'
              name='lastattended'
              rows='3'
              placeholder='Enter text here'
              required
            />
          </Col>
          <Col md='12'>
            <Label className='mt-1'>Sibling studying in this school</Label>
            <Input
              type='textarea'
              name='sibling'
              rows='3'
              placeholder='Enter text here'
              required
            />
          </Col>
          <Col md='12'>
            <Label className='mt-1'>Medical Information (if any)</Label>
            <Input
              type='textarea'
              name='medical'
              rows='3'
              placeholder='Enter text here'
              required
            />
          </Col>
          <Col md='12'>
            <Label className='mt-1'>Address*</Label>
            <Input
              type='textarea'
              name='address'
              rows='3'
              placeholder='Enter text here'
              required
            />
          </Col>
          <Col md='12'>
            <Label className='mt-1'>Parent Guardian Employment*</Label>
            <Input
              type='textarea'
              name='parent'
              rows='3'
              placeholder='Enter text here'
              required
            />
          </Col>
        </Row>
        <br />
        <p style={{ color: '#3A2050' }} className='ml-3'>
          <Input type='checkbox' id='policy' />I have read{' '}
          <span style={{ color: '#FBC368' }}>Rules & Regulations </span>
          and I agree with them.
        </p>
        <br />
        <div className='text-center my-2'>
          <Button size='lg' className='btn__submit1'>
            Submit
          </Button>
        </div>
      </Container>
    </>
  );
};

export default ChapterHouse;
