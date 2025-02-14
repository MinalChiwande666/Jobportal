import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalsUi = ({size,title,children,open,close}) => {
    const handleClose = ()=>{
        close(false)
    }
  return (
    <Modal size={size} show={open} onHide={close}>
        <Modal.Header closeButton>
           <h2>{title}</h2>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModalsUi