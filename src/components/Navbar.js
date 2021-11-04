import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'



function NavBar() {
    return (
      <>
      <Navbar  bg='dark' variant='dark'>
          
          <Navbar.Brand style={{marginLeft: '10vh'}}>
              Herculis
          </Navbar.Brand>
          <Container>
          <Nav></Nav>
          <Nav  variant='pills' defaultActiveKey='\'>
          <Nav.Link href='\home'>
              Home 
          </Nav.Link>
          <Nav.Link href='\'>
              Login
          </Nav.Link>
          <Nav.Link href='\home'>
              Came
          </Nav.Link>
          <Nav.Link href='\about'>
              Come
          </Nav.Link>
        </Nav>
        </Container>
          

      </Navbar>
      </>
        
    )
}

export default NavBar
