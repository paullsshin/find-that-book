import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar className='navbar'>
        <Container fluid>
          <div className='nav-title'>
            Find That Book
          </div>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
            <Nav className='ml-auto d-flex nav-items'>
              <Nav.Link className='buttons'as={Link} to='/'>
                Search For Books
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link className='buttons' as={Link} to='/saved'>
                    Saved Books
                  </Nav.Link>
                  <Nav.Link className='buttons' onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link className='buttons' onClick={() => setShowModal(true)}>Login or Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* tiny code to deploy with heroku test */}
      {/* set modal data up */}
      <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
