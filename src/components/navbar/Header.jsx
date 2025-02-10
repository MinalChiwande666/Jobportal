import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { BellFill,  ChatLeftDotsFill, PersonFill } from 'react-bootstrap-icons'
const Header = () => {
    const nav = [
        {
            id:1,
            name:'Home',
            nav:'/'
        },
        {
            id:2,
            name:'Find Companies',
            nav:'/companies'
        },
    ]
  return (
    <Navbar className="bg-body-white border bg-white p-2">
      <Container>
        <div className='d-flex align-items-center gap-4'>
        <Navbar.Brand href="#home"><h3 className='text-primary'>JobSeeking</h3></Navbar.Brand>
         {
            nav.map((item,index)=>(
                <span key={index}>{item?.name}</span>
            ))
         }
         </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div className='d-none d-lg-flex gap-5 align-items-center'>
             <h5><ChatLeftDotsFill className='text-dark'/></h5>
             <h5><BellFill className='text-dark'/></h5>
             <h5><PersonFill className='text-dark'/></h5>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header