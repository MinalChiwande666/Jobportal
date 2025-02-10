import React,{useState} from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { BellFill, ChatLeftDotsFill, List, PersonFill } from 'react-bootstrap-icons'
import Sidebar from '../sidebar/Sidebar'
const EmployerHeader = () => {
    const [openSidebar,setOpenSidebar] = useState(false)
    return (
       <Navbar className="bg-body-white border bg-white p-2">
             <Container>
               <div className='d-flex align-items-center gap-4'>
               <Navbar.Brand href="#home"><h3 className='text-dark'>JobSeeking</h3></Navbar.Brand>
               
                </div>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
                 <Navbar.Text>
                   <div className='d-lg-flex gap-5 align-items-center'>
                    <h5><ChatLeftDotsFill className='d-none d-lg-flex text-dark'/></h5>
                    <h5><BellFill className='d-none d-lg-flex text-dark'/></h5>
                    <h5><PersonFill className='d-none d-lg-flex text-dark'/></h5>
                    <h5><Button onClick={()=>{setOpenSidebar((prev)=>!prev)}} variant='light'><List/></Button></h5>
                   </div>
                 </Navbar.Text>
               </Navbar.Collapse>
               <Sidebar open={openSidebar} setOpen={setOpenSidebar}/>
             </Container>
           </Navbar>
    )
}

export default EmployerHeader