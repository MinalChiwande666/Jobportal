import React from 'react'
import { BoxArrowInUp, BriefcaseFill, Person, PersonRaisedHand, PlusSquareFill } from 'react-bootstrap-icons';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './sidebar.css'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Sidebar = ({open,setOpen}) => {

  const handleClose = () => setOpen(false);
  const navigate = useNavigate()

  const nav = [
    {
        id:1,
        name:'All Jobs',
        nav: '/',
        icon:<BriefcaseFill/>
    },
    {
        id:1,
        name:'Create Job',
        nav: '/addbasicdetails',
        icon:<PlusSquareFill/>
    },
    {
        id:1,
        name:'Candidates',
        nav: '/',
        icon:<PersonRaisedHand/>
    },
    {
        id:1,
        name:'Account',
        nav: '/',
        icon:<Person/>
    },

  ]
 
  return (
    <>
   

    <Offcanvas  show={open} onHide={handleClose} className='sidebarContainer' >
      <Offcanvas.Header  className='bg-dark text-white' closeButton>
        <Offcanvas.Title className='text-white'>JobSeeker</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='bg-dark d-flex align-items-start flex-column gap-5'>
         {
            nav.map((item,index)=>(
                <span onClick={()=>{navigate(item?.nav)}} className='text-white p-2 rounded navHover d-flex align-items-center gap-3' key={index}>{item?.icon} {item?.name}</span>
            ))
         }
         <div className='p-2'>
         <Button className='d-flex align-items-center gap-2' variant="outline-light"><BoxArrowInUp/><span>Logout</span></Button>
         </div>
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default Sidebar