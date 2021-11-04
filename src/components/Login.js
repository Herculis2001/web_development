import React from 'react'
import { Form,Button,Card,Container,Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Login() {
    return (
       <>
       <div className='w-100 h-100' style={{backgroundColor: '#363636',minHeight: '500px',minWidth: '500px'}}>
       <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}} >
           <div className='w-100' style={{maxWidth:'400px'}}>
               <Card style={{backgroundColor: 'rgb(33,37,41)'}}>
                   <Card.Body>
                       <h2 className='text-center mb-4' style={{color: 'white'}}>
                           Login
                       </h2>
                       <Form>
                           <Form.Group id='email'>
                               <Form.Label style={{color: 'white'}}>
                                   Email
                               </Form.Label>
                               <Form.Control type='email'>

                               </Form.Control>
                           </Form.Group>
                           <Form.Group  id='password'>
                              <Form.Label style={{color: 'white'}}>
                                  Password
                                </Form.Label> 
                                <Form.Control type='password'>

                                </Form.Control>
                           </Form.Group>
                           <Button type='submit' className ='w-100 mt-5'>Login
                               </Button> 
                       </Form>
                   </Card.Body>
               </Card>
               </div> 
               
       </Container>
       </div>
       </>
    )
}
